import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/api.service';
import { ModalService } from '../../../shared/modal.service';
import { Room } from '../../../shared/models/room.model';
import { StaticObject } from '../../../shared/models/static-object.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  room!: Room;
  staticObjects: StaticObject[] = []
  constructor(private apiService: ApiService, private modalService: ModalService) { }

  ngOnInit() {
    this.apiService.getRoom(0).subscribe(room => this.room = room);
    this.apiService.getStaticObjects().subscribe(objects => this.staticObjects = objects);
    console.log(this.staticObjects)
  }
}
