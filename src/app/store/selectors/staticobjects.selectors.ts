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
