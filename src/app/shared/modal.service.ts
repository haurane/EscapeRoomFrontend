import { Injectable } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: ModalComponent[]=[];

  add(modal: ModalComponent) {
    if (!modal.id || this.modals.find(x => x.id === modal.id)){
      throw new Error('modal must have a unique id attribute');
    }
    this.modals.push(modal);
  }

  remove(modal: ModalComponent) {
    this.modals.filter(x => x === modal);
  }

  open(id: String) {
    const modal = this.modals.find(x => x.id === id);
    if (!modal) {
      throw new Error(`modal with id: '${id}' not found`);
    }
    modal.open();
  }

  close() {
    const modal = this.modals.find(x => x.isOpen);
    modal?.close();
  }

  constructor() { }
}
