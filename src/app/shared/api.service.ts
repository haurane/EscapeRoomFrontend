import { Injectable } from '@angular/core';
import { STORIES, STATIC_OBJECTS, ROOMS, ITEMS } from '../../assets/mocks';
import { Observable, of } from 'rxjs';
import { Story } from './models/story.model';
import { StaticObject } from './models/static-object.model'
import { Item } from './models/item.model';
import { Room } from './models/room.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getStories(): Observable<Story[]> {
    return of(STORIES)
  }

  getStaticObjects(): Observable<StaticObject[]> {
    return of(STATIC_OBJECTS)
  }

  getItems(): Observable<Item[]> {
    return of(ITEMS)
  }

  getRooms(): Observable<Room[]> {
    return of(ROOMS)
  }

  getRoom(id: Number): Observable<Room> {
    return of(ROOMS[0]);
  }
}
