import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../store';
import { Observable, of } from 'rxjs';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items$: Observable<Item[]> = of([])

  constructor(private store:Store<fromStore.fromReducers.EscapeRoomState>){
    
  }
  
}
