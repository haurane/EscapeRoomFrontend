import { Action } from "@ngrx/store";
import { StaticObject } from "../../shared/models/static-object.model";
import { UnlockDTO } from "../../shared/models/unlock.model";
import { Item } from "../../shared/models/item.model";

export const LOAD_STATICOBJECT_OF_ROOM = '[EscapeRoom] Load Static Object by Room ID'
export const LOAD_STATICOBJECT_OF_ROOM_SUCCESS = '[EscapeRoom] Load Static Object Success'
export const LOAD_STATICOBJECT_OF_ROOM_FAIL = '[EscapeRoom] Load Static Object Failure'
export const UNLOCK_STATICOBJECT = '[EscapeRoom] UnlockStaticObject'
export const UNLOCK_STATICOBJECT_SUCCESS = '[EscapeRoom] UnlockStaticObject Success'
export const UNLOCK_STATICOBJECT_FAIL = '[EscapeRoom] UnlockStaticObject Failure'
export const SELECT_ACTIVE_OBJECT = '[EscapeRoom] Select Active Object to Display'

export class LoadStaticObjectsOfRoom implements Action {
  readonly type = LOAD_STATICOBJECT_OF_ROOM;
  constructor(public payload: string) { }
}

export class LoadStaticObjectOfRoomSuccess implements Action {
  readonly type = LOAD_STATICOBJECT_OF_ROOM_SUCCESS;
  constructor(public payload: StaticObject[] ) { }
}

export class LoadStaticObjectOfRoomFail implements Action {
  readonly type = LOAD_STATICOBJECT_OF_ROOM_FAIL;
  constructor(public payload: any) { }
}

export class UnlockStaticObject implements Action {
  readonly type = UNLOCK_STATICOBJECT;
  constructor(public payload: UnlockDTO) { }
}

export class UnlockStaticObjectSuccess implements Action {
  readonly type = UNLOCK_STATICOBJECT_SUCCESS;
  constructor(public payload: { uuid: string, items: Item[] }) { }
}

export class UnlockStaticObjectFail implements Action {
  readonly type = UNLOCK_STATICOBJECT_FAIL;
  constructor(public payload:  string ) { }
}

export class SelectActiveObject implements Action {
  readonly type = SELECT_ACTIVE_OBJECT;
  constructor(public payload: StaticObject) { }
}


export type StaticObjectAction = LoadStaticObjectOfRoomFail | LoadStaticObjectsOfRoom | LoadStaticObjectOfRoomSuccess | UnlockStaticObject | UnlockStaticObjectSuccess | UnlockStaticObjectFail | SelectActiveObject
