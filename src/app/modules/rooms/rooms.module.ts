import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-list/room-detail/room-detail.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ItemsModule } from '../items/items.module';
import { StaticObjectsModule } from '../static-objects/static-objects.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomCreateComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule,
    ItemsModule,
    StaticObjectsModule,
    MatProgressSpinnerModule
  ]
})
export class RoomsModule { }
