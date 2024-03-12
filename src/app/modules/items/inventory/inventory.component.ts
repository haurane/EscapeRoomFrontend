import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store'
import { Observable, from, of } from 'rxjs';
import { Item } from '../../../shared/models/item.model';
import { ModalService } from '../../../shared/modal.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {


  inventory$: Observable<Item[]>
  activeItem: Item = { name: "", description: "", uuid: "" }

  constructor(private store: Store<fromStore.fromReducers.EscapeRoomState>, private modalService: ModalService) {
    this.inventory$ = store.select(fromStore.fromSelectors.getInventory)
  }

  removeFromInventory(item: Item) {
    this.store.dispatch(new fromStore.fromActions.RemoveItemInventory(item))
  }

  openItemDetail(item: Item) {
    this.activeItem =  item;
    console.log(item)
    this.modalService.open("itemModal")
  }
}
