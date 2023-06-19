import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';
  @Input() body: string = '';
  @Output() closeMeEvent = new EventEmitter<boolean>();
  @Output() confirmEvent = new EventEmitter<boolean>();
  ngOnInit(): void {}

  closeMe() {
    this.closeMeEvent.emit(false);
  }
  confirm() {
    this.confirmEvent.emit(true);
  }

  ngOnDestroy(): void {}
}
