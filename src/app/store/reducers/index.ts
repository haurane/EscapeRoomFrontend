import { ActionReducerMap } from "@ngrx/store";
import * as fromItems from "./items.reducer"
import * as fromRooms from "./rooms.reducer"
import * as fromStaticObjects from "./staticobjects.reducer"
import { createFeatureSelector } from "@ngrx/store";



export interface EscapeRoomState {
  items: fromItems.ItemState;
  rooms: fromRooms.RoomState;
  staticObjects: fromStaticObjects.StaticObjectState;
}

export const reducers: ActionReducerMap<EscapeRoomState, any> = {
  items: fromItems.itemReducer,
  rooms: fromRooms.roomReducer,
  staticObjects: fromStaticObjects.staticObjectReducer,
};



export const getEscapeRoomState = createFeatureSelector<EscapeRoomState>(
  'EscapeRoom'
)


export * from "./items.reducer"
export * from "./rooms.reducer"
export * from "./staticobjects.reducer"
