import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { Subject } from "rxjs";
import { ConfirmDialogComponent } from "./confirm-dialog.component";

@Injectable({providedIn: 'root'}) 
export class ModalService {
    private componentRef!: ComponentRef<ConfirmDialogComponent>;
    private componentSubscriber!: Subject<boolean>;
    constructor() {}
  
    openModal(entry: ViewContainerRef, modalTitle?: string, modalBody?: string) {
      this.componentRef = entry.createComponent<ConfirmDialogComponent>(ConfirmDialogComponent);
      this.componentRef.instance.title = modalTitle;
      this.componentRef.instance.body = modalBody;
      this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
      this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
      this.componentSubscriber = new Subject<boolean>();
      return this.componentSubscriber.asObservable();
    }
  
    closeModal() {
      this.componentSubscriber.next(false);
      this.componentSubscriber.complete();
      this.componentRef.destroy();
    }
  
    confirm() {
      this.componentSubscriber.next(true);
      this.closeModal();
    }
  }