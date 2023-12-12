import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Story } from './models/story.model';
import { StaticObject } from './models/static-object.model'
import { Item } from './models/item.model';
import { Room } from './models/room.model';
import { environment } from '../../environments/environment.development'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*',
      'Access-Control-Allow-Origin': ['*'],
      'Access-Control-Allow-Headers': ['*']
    })
  }

  constructor(private http: HttpClient) { }

  getStories(): Observable<any> {
    return this.http.get(environment.backendUrl + 'stories/', this.httpOptions)
  }

  getRoom(id: String): Observable<any> {
    return this.http.get(environment.backendUrl + 'rooms/'+id)
  }
}
