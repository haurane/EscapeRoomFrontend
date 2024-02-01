import { Action } from "@ngrx/store";
import { Room } from "../../shared/models/room.model";

export const LOAD_ROOM = '[EscapeRoom] Load Room'
export const LOAD_ROOM_SUCCESS = '[EscapeRoom] Load Room Success'
export const LOAD_ROOM_FAIL = '[EscapeRoom] Load Room Failure'

export class LoadRoom implements Action {
  readonly type = LOAD_ROOM;
  constructor(public payload: string) { }
}

export class LoadRoomSuccess implements Action {
  readonly type = LOAD_ROOM_SUCCESS;
  constructor(public payload: Room) { }
}

export class LoadRoomFail implements Action {
  readonly type = LOAD_ROOM_FAIL;
  constructor(public payload: any) { }
}


export type RoomAction = LoadRoom | LoadRoomSuccess | LoadRoomFail
