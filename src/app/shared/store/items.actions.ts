import { createAction, createActionGroup, props } from '@ngrx/store'
import { Item } from '../models/item.model'

export const ItemActions = createActionGroup({
  source: "Items",
  events: {
    "addItem": props<{ item: Item }>(),
    "removeItem": props<{item: Item}>(),
  }
})

//export const addItem = createAction('Add Item');
//export const removeItem = createAction('Remove Item');
export const resetItems = createAction('Reset Items')
