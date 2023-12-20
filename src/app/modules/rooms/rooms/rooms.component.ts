import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/api.service';
import { ModalService } from '../../../shared/modal.service';
import { Room } from '../../../shared/models/room.model';
import { Item } from '../../../shared/models/item.model';
import { Store } from '@ngrx/store';
import { ItemActions } from '../../../shared/store/items.actions';
import { Router } from '@angular/router';
import { StaticObject } from '../../../shared/models/static-object.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  
  room!: Room;
  containedObjects?: StaticObject[];
  inspectedObject!: StaticObject;
  testItem: Item = { name: 'Test Item', description: 'TestItem', id: "1" }
  testItem2: Item = { name: 'Test Item2', description: 'TestItem2', id: "2" }
  roomId: string;
  safeHtml = "<p>Error Displaying HTML</p>"
  hover: boolean = false;
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
    this.apiService.getObjectsOfRoom(this.roomId).subscribe(objects => this.containedObjects = objects);
    console.log(this.containedObjects)

  }

  addItem() {
    console.log(this.containedObjects)
  }

  inspectStatObj(uuid: string) {
    this.modalService.open("StaticObjectModal")
    console.log(uuid)
  }

  inspectObject(object: StaticObject) {
    this.inspectedObject = object;
    this.modalService.open("StaticObjectModal")
  }

}
