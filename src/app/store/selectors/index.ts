import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromItems from './item.selectors'
import * as fromRooms from './room.selectors'
import * as fromStaticObjects from './staticobjects.selectors'

export * from "./item.selectors"
export * from "./room.selectors"
export * from "./staticobjects.selectors"

export const getContainedStaticObjectsOfRoom = (id: string) => createSelector(
  fromRooms.getContainedStaticObjectsIds(id),
  fromStaticObjects.getStaticObjectEntities,
  ((statObjIds, entities) => statObjIds.map(id => entities[id]))
)

export const getHeldItemsOfStaticObject = (id: string) => createSelector(
  fromStaticObjects.getItemsIdsOfObject(id),
  fromItems.getItemEntities,
  ((itemIds, entities) => itemIds.map(id => entities[id]))
)

export const getLoaded = createSelector(
  fromStaticObjects.getStaticObjectLoaded,
  fromItems.getItemsLoaded,
  fromRooms.getRoomLoaded,
  (objects, items, rooms) => { return objects && items && rooms }
)

export const getLoading = createSelector(
  fromStaticObjects.getStaticObjectLoading,
  fromItems.getItemsLoading,
  fromRooms.getRoomLoading,
  (objects, items, rooms) => { return objects || items || rooms }
)
