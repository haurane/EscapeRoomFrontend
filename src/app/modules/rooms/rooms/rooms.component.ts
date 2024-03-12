import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/api.service';
import { ModalService } from '../../../shared/modal.service';
import { Room } from '../../../shared/models/room.model';
import { Item } from '../../../shared/models/item.model';
import { Store, select } from '@ngrx/store';
import { ItemAction } from '../../../store/actions/items.actions';
import { Router } from '@angular/router';
import { StaticObject } from '../../../shared/models/static-object.model';
import { Observable, forkJoin, of } from 'rxjs';
import * as fromStore from '../../../store';
import { LoadRoom } from '../../../store/actions/rooms.action';
import { LoadStaticObjectsOfRoom } from '../../../store/actions/staticobjects.actions';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {


  room$: Observable<Room>;
  //containedObjects$: Observable<StaticObject[]>;
  inspectedObject!: StaticObject;
  roomId: string;
  introText: string;
  safeHtml = "<p>Error Displaying HTML</p>"
  hover: boolean = false;
  loaded: boolean = true;
  inventory$: Observable<Item[]>;

  CO$: Observable<string[]> = of([])


  constructor(private apiService: ApiService, private modalService: ModalService, private store: Store<fromStore.fromReducers.EscapeRoomState>, private router: Router) {
    const navi = this.router.getCurrentNavigation();
    const state = navi?.extras.state as { roomId: string , intro: string}
    this.roomId = state.roomId;
    this.introText = state.intro;
    this.room$ = this.store.select(fromStore.fromSelectors.getRoomById(this.roomId))
    this.inventory$ = this.store.select(fromStore.fromSelectors.getInventory)
}

  ngOnInit() {
    this.store.dispatch(new LoadRoom(this.roomId));
    this.store.dispatch(new LoadStaticObjectsOfRoom(this.roomId));
    alert(this.introText)
  }

  removeFromInventory(item: Item) {
    this.store.dispatch(new fromStore.fromActions.RemoveItemInventory(item))
  }
  
}
