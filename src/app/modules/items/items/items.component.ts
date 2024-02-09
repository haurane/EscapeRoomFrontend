import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { Store } from '@ngrx/store';
import { ItemAction, PutItemInventory } from '../../../store/actions/items.actions';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnChanges {
  @Input() uuid!: string;
  item$: Observable<Item>

  showDescription: boolean = false;

  constructor(private store: Store) {
    this.item$ = this.store.select(fromStore.fromSelectors.getItemById(this.uuid));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item$ = this.store.select(fromStore.fromSelectors.getItemById(this.uuid))
  }



  addToStore(item: Item) {
    this.store.dispatch(new PutItemInventory(item))
  }
}
