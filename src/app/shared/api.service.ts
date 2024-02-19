import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Story } from './models/story.model';
import { StaticObject } from './models/static-object.model'
import { Item } from './models/item.model';
import { Room } from './models/room.model';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UnlockDTO } from './models/unlock.model';

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

  getRoom(id: String): Observable<Room> {
    return this.http.get<Room>(environment.backendUrl + 'rooms/'+id)
  }

  getObjectsOfRoom(id: String): Observable<StaticObject[]> {
    return this.http.get < StaticObject[]>(environment.backendUrl + 'staticobjects/' + id + '/contained')
  }

  getItemsOfObject(id: String): Observable<any> {
    return this.http.get(environment.backendUrl + 'items/' + id + '/held')
  }

  unlockStaticObject(dto: UnlockDTO): Observable<Item[]> {
    const body = JSON.stringify(dto);
    console.log(body);
    return this.http
      .post<Item[]>(environment.backendUrl + 'staticobjects/' + dto.uuid + '/unlock', body, this.httpOptions)
      .pipe(catchError((error: any) => { console.log(error.error.message); return throwError(error) }))
  }
}
