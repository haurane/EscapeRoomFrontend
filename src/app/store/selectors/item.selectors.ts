import { createSelector } from "@ngrx/store";
import * as fromReducers from "../reducers"
import { Item } from "../../shared/models/item.model";
import { getActiveObject } from "./staticobjects.selectors";
import { StaticObject } from "../../shared/models/static-object.model";

export const getItemState = createSelector(
  fromReducers.getEscapeRoomState,
  (state: fromReducers.EscapeRoomState) => state.items
);

export const getItemEntities = createSelector(
  getItemState,
  fromReducers.getItemEntities
)

export const getItemsLoaded = createSelector(
  getItemState,
  fromReducers.getItemsLoaded
)

export const getItemsLoading = createSelector(
  getItemState,
  fromReducers.getItemsLoading
)

export const getInventory = createSelector(
  getItemState,
  fromReducers.getInventory
)

export const getItemListById = (itemIds: string[]) => createSelector(
  getItemEntities,
  (entities => itemIds.map(id => entities[id]))
)
