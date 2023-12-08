import { createAction, createActionGroup, props } from '@ngrx/store'

export const ItemActions = createActionGroup({
  source: "Items",
  events: {
    "addItem": props<{ itemId: string }>(),
    "removeItem": props<{itemId: string}>(),
  }
})

//export const addItem = createAction('Add Item');
//export const removeItem = createAction('Remove Item');
export const resetItems = createAction('Reset Items')
