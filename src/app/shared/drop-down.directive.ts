import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit {

  @HostBinding('class.open') isOpen = false;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }


  // @HostListener('click') close(eventData: Event) {
  //   this.renderer.addClass(this.elRef.nativeElement, 'open')
  // } 

}
