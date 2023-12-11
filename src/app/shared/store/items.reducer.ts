import { createReducer, on } from "@ngrx/store";
import { ItemActions, resetItems } from "./items.actions";
import { Item } from "../models/item.model";

export const initialState: ReadonlyArray<Item> = [];

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.addItem, (state, { item }) => {
    if (state.indexOf(item) > -1) return state;

    return [...state, item];
  }),
  on(ItemActions.removeItem, (state, { item }) => {
    return state.filter((storeItem)=> storeItem !== item)
  }),
);
