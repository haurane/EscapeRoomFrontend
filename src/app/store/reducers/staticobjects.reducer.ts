import { from } from "rxjs";
import { fromActions } from "..";
import { StaticObject } from "../../shared/models/static-object.model";
import * as fromStaticObject from "../actions/staticobjects.actions"

export interface StaticObjectState {
  entities: { [uuid: string]: StaticObject };
  itemsLoaded: { [uuid: string]: boolean };
  loaded: boolean;
  loading: boolean;
  unlockError: {
    error: boolean;
    message: string;
  }
  activeObject: StaticObject
}

export const soInitialState: StaticObjectState = {
  entities: {},
  itemsLoaded: {},
  loaded: false,
  loading: false,
  unlockError: {
    error: false,
    message: "",
  },
  activeObject: {
    name: "", uuid: "", description: "", combination: [""], locked: false, heldItems: [{ name: "", uuid: "" }], requiredItems: [{ name: "", uuid:"" }]
  }
}

export function staticObjectReducer(
  state: StaticObjectState = soInitialState,
  action: fromStaticObject.StaticObjectAction
): StaticObjectState {

  switch (action.type) {
    case (fromActions.LOAD_STATICOBJECT_OF_ROOM): {
      return {
        ...state,
        loading: true
      };
    }
    case (fromActions.LOAD_STATICOBJECT_OF_ROOM_FAIL): {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case (fromActions.LOAD_STATICOBJECT_OF_ROOM_SUCCESS): {
      const staticObjects = action.payload;

      const entities = staticObjects.reduce(
        (entities: { [id: string]: StaticObject }, so: StaticObject) => {
          return {
            ...entities,
            [so.uuid]: so,
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      }
    }

    case (fromActions.SELECT_ACTIVE_OBJECT): {
      return {
        ...state,
        activeObject: action.payload
      }
    }
    case (fromActions.UNLOCK_STATICOBJECT): {
      return {
        ...state,
        loading : true
      }
    }
    case (fromActions.UNLOCK_STATICOBJECT_SUCCESS): {
      console.log(action)
      const newHeldItems = action.payload.items.map((item) => { return { name: item.name, uuid: item.uuid } })
      console.log(newHeldItems)
      const entities = {
        ...state.entities,
        [action.payload.uuid]: {
          ...state.entities[action.payload.uuid],
          locked: false,
          heldItems: newHeldItems

        }
      }

      console.log(entities)
      return {
        ...state,
        entities: entities,
        loaded: true,
        loading: false,
      }
    }
    case (fromActions.UNLOCK_STATICOBJECT_FAIL): {
      console.log(action)
      // TODO: is alert the best way?
      alert(action.payload)
      return {
        ...state,
        unlockError: {
          error: true,
          message: action.payload
        },
        loaded: true,
        loading: false
      }
    }
  }
  
  return state;
}

export const getStaticObjectEntities = (state: StaticObjectState) => state.entities;
export const getItemsOfObjectLoaded = (state: StaticObjectState) => state.itemsLoaded;
export const getActiveObject = (state: StaticObjectState) => state.activeObject;
export const getStaticObjectLoaded = (state: StaticObjectState) => state.loaded;
export const getStaticObjectLoading = (state: StaticObjectState) => state.loading;
export const getUnlockError = (state: StaticObjectState) => state.unlockError;
