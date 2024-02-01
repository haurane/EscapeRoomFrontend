import { Component, Input } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { Store } from '@ngrx/store';
import { ItemAction, PutItemInventory } from '../../../store/actions/items.actions';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  @Input() item!: Item;

  showDescription: boolean = false;

  constructor(private store: Store) { }

  addToStore() {
    this.store.dispatch(new PutItemInventory(this.item))
  }
}
