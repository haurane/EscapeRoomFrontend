import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { ApiService } from "../../shared/api.service";

import * as fromActions from "../actions";

@Injectable()
export class StaticObjectEffects {
  constructor(private actions$: Actions, private apiService: ApiService) { }

  loadStaticObjects$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LOAD_STATICOBJECT_OF_ROOM),
    map((action: fromActions.LoadStaticObjectsOfRoom) => action.payload),
    switchMap((id) =>
      this.apiService.getObjectsOfRoom(id).pipe(
        map(res => new fromActions.LoadStaticObjectOfRoomSuccess(res))
      )
    )
  ))

  unlockStaticObject$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UNLOCK_STATICOBJECT),
    map((action: fromActions.UnlockStaticObject) => action.payload),
    switchMap((dto) => 
      this.apiService.unlockStaticObject(dto).pipe(
        map(res => new fromActions.UnlockStaticObjectSuccess({ uuid: dto.uuid, items: res })),
        catchError((error) => { console.log(error); return of(new fromActions.UnlockStaticObjectFail(error.error.message)) })
      )
    
    )
  ))


}
