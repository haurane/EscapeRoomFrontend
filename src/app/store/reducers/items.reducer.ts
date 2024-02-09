import * as fromItems from "../actions/items.actions"
import { Item } from "../../shared/models/item.model";
import { fromActions } from "..";


export interface ItemState {
  entities: {[uuid: string]: Item};
  inventory: Item[];
  loaded: boolean;
  loading: boolean;
}

export const itemsInitialState: ItemState = {
  entities: {},
  inventory: [],
  loaded: false,
  loading: false
};

export function itemReducer(
  state: ItemState = itemsInitialState,
  action: fromItems.ItemAction
): ItemState {
  switch (action.type) {
    case (fromActions.LOAD_ITEMS): {
      return {
        ...state,
        loading: true,
      }
    }
    case (fromActions.LOAD_ITEMS_FAIL): {
      return {
        ...state,
        loaded: false,
        loading: false,
      }
    }
    case (fromActions.LOAD_ITEMS_OF_OBJECT): {
      return {
        ...state,
        loading: true,
      }
    }
    case (fromActions.LOAD_ITEMS_SUCCESS): {
      const items = action.payload
      const entities = items.reduce(
        (entities: { [uuid: string]: Item }, item: Item) => {
          return {
            ...entities,
            [item.uuid]: item,
          }
        }, {
        ...state.entities
        }
      )
      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      }
    }

    case (fromActions.PUT_ITEM_INVENTORY): {
      const item = action.payload
      if (state.inventory.some(({ uuid }) => uuid === action.payload.uuid)) {
        return state
      }
      return {
        ...state,
        inventory: [...state.inventory, item ]
      }
    }

    case (fromActions.REMOVE_ITEM_INVENTORY): {
      const item = action.payload
      return {
        ...state,
        inventory: [...state.inventory.filter(invItem => invItem != item)]
      }
    }
  }

  return state
}

export const getItemsLoading = (state: ItemState) => state.loading;
export const getItemsLoaded = (state: ItemState) => state.loaded;
export const getItemEntities = (state: ItemState) => state.entities;
export const getInventory = (state: ItemState) => state.inventory;
