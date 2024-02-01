import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../shared/api.service";

import * as fromActions  from '../actions'
import { map, switchMap } from "rxjs";
@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions, private apiService: ApiService) { }

  loadItemsOfStaticObject$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LOAD_ITEMS_OF_OBJECT),
    map((action: fromActions.LoadItemsOfObject) => action.payload),
    switchMap((id) =>
      this.apiService.getItemsOfObject(id).pipe(
        map(res => new fromActions.LoadItemsSuccess( res ))
      )
    )
  )
    
  )
}
