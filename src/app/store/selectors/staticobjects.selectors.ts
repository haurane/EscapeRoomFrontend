import { createSelector } from "@ngrx/store"
import * as fromReducers from "../reducers"
import { StaticObject } from "../../shared/models/static-object.model";


export const getStaticObjectsState = createSelector(
  fromReducers.getEscapeRoomState,
  (state: fromReducers.EscapeRoomState) => state.staticObjects
)

export const getStaticObjectEntities = createSelector(
  getStaticObjectsState,
  fromReducers.getStaticObjectEntities
)

export const getItemsOfObjectLoaded = createSelector(
  getStaticObjectsState,
  fromReducers.getItemsOfObjectLoaded
)

export const getStaticObjectById =(uuid: string) => createSelector(
  getStaticObjectEntities,
  (entities) => entities[uuid]
)

export const getItemsOfObjectLoadedById = (uuid: string) => createSelector(
  getItemsOfObjectLoaded,
  (loaded) => loaded[uuid]
) 

export const getStaticObjectListById = (uuids: string[]) => createSelector(
  getStaticObjectEntities,
  (entities) => {
    return uuids.map(id => entities[id])
  }
)


export const getActiveObject = createSelector(
  getStaticObjectsState,
  fromReducers.getActiveObject
)

export const getActiveObjectId = createSelector(
  getActiveObject,
  (obj: StaticObject) => obj.uuid
)

export const getItemsIdsOfObject = (id: string) => createSelector(
  getStaticObjectById(id),
  (obj => obj.heldItems.map(value => value.uuid))
)

export const getStaticObjectLoaded = createSelector(
  getStaticObjectsState,
  fromReducers.getStaticObjectLoaded
)

export const getStaticObjectLoading = createSelector(
  getStaticObjectsState,
  fromReducers.getStaticObjectLoading
)

export const getUnlockError = createSelector(
  getStaticObjectsState,
  fromReducers.getUnlockError
)

export const getUnlockErrorStatus = createSelector(
  getUnlockError,
  (err => err.error)
)

export const getUnlockErrorMessage = createSelector(
  getUnlockError,
  (err => err.message)
)
