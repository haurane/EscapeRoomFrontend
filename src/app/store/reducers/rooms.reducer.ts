import * as fromRooms from "../actions/rooms.action"
import { Room } from "../../shared/models/room.model";
import { fromActions } from "..";

export interface RoomState {
  entities: { [uuid: string]: Room };
  loaded: boolean;
  loading: boolean;
}

export const roomInitialState: RoomState = {
  entities: { },
  loaded: false,
  loading: false
}

export function roomReducer (
  state: RoomState = roomInitialState,
  action: fromRooms.RoomAction
): RoomState {

  switch (action.type) {
    case (fromActions.LOAD_ROOM): {
      return {
        ...state,
        loading: true,
      };
    }
    case (fromActions.LOAD_ROOM_FAIL):{
      return {
        ...state,
        loaded: false,
        loading: false
      }
    }
    case (fromActions.LOAD_ROOM_SUCCESS): {
      const room = action.payload
      const entity = {[room.uuid]: room}
      return {
        ...state,
        loaded: true,
        loading: false,
        entities: entity
      }
    }
  }
  
  return state;
}

export const getRoomLoading = (state: RoomState) => state.loading;
export const getRoomLoaded = (state: RoomState) => state.loaded;
export const getRoomEntities = (state: RoomState) => state.entities;
