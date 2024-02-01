import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";

import { ApiService } from "../../shared/api.service";

import * as fromActions from "../actions"

@Injectable()
export class RoomEffects {
  constructor(private actions$: Actions, private apiService: ApiService) { }

  loadRoom$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LOAD_ROOM),
    map((action: fromActions.LoadRoom) => action.payload),
    switchMap((id) =>
      this.apiService.getRoom(id).pipe(
        map(res => new fromActions.LoadRoomSuccess(res))
      )
    )
  ))
}
