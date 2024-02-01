import { createSelector } from "@ngrx/store"
import * as fromReducers from "../reducers"

export const getRoomState = createSelector(
  fromReducers.getEscapeRoomState,
  (state: fromReducers.EscapeRoomState) => state.rooms
)

export const getRoomEntities = createSelector(
  getRoomState,
  fromReducers.getRoomEntities
)

export const getRoomLoading = createSelector(
  getRoomState,
  fromReducers.getRoomLoading
)

export const getRoomLoaded = createSelector(
  getRoomState,
  fromReducers.getRoomLoaded
)

export const getRoomById = (roomId: string) =>
  createSelector(
    getRoomEntities,
    (rooms) => {
      return rooms[roomId]
    }
      
  )

export const getContainedStaticObjectsIds = (roomId: string) =>
  createSelector(
    getRoomById(roomId),
    (room) => {
      return room?.containedObjects.map(statobj => { return statobj.uuid })
    }
  )
  
