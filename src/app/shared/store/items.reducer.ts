import { createReducer, on } from "@ngrx/store";
import { ItemActions, resetItems } from "./items.actions";
import { Item } from "../models/item.model";

export const initialState: ReadonlyArray<string> = [];

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.addItem, (state, { itemId }) => {
    if (state.indexOf(itemId) > -1) return state;

    return [...state, itemId];
  }),
  on(ItemActions.removeItem, (state, { itemId }) => {
    return state.filter((id)=>id !== itemId)
  }),
);
