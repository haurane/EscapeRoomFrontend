import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/api.service';
import { ModalService } from '../../../shared/modal.service';
import { Room } from '../../../shared/models/room.model';
import { Item } from '../../../shared/models/item.model';
import { Store } from '@ngrx/store';
import { ItemActions } from '../../../shared/store/items.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  room!: Room;
  testItem: Item = { name: 'Test Item', description: 'TestItem', id: "1" }
  testItem2: Item = { name: 'Test Item2', description: 'TestItem2', id: "2" }
  roomId: string;
  constructor(private apiService: ApiService, private modalService: ModalService, private store: Store, private router: Router) {
    const navi = this.router.getCurrentNavigation();
    const state = navi?.extras.state as { roomId: string }
    this.roomId = state.roomId;
    console.log(state)
}

  ngOnInit() {
    //var roomId = this.router.getCurrentNavigation()?.extras.state.roomId;
    console.log(this.roomId)
    this.apiService.getRoom(this.roomId).subscribe(room => this.room = room);
    

  }

  addItem() {
    console.log('add1')
    this.store.dispatch(ItemActions.addItem({item:this.testItem}))
  }
  addItem2() {
    console.log('add2')
    this.store.dispatch(ItemActions.addItem({ item: this.testItem2 }))
  }
  removeItem() {
    console.log('re1')
    this.store.dispatch(ItemActions.removeItem({ item: this.testItem }))
  }
  removeItem2() {
    console.log('re2')
    this.store.dispatch(ItemActions.removeItem({ item: this.testItem2 }))
  }

  inspectStatObj(uuid: string) {
    console.log(uuid)
  }

}
