import { Action } from '@ngrx/store'
import { Item } from '../../shared/models/item.model';

export const LOAD_ITEMS = '[EscapeRoom] Load Items';
export const LOAD_ITEMS_SUCCESS = '[EscapeRoom] Load Items Success'
export const LOAD_ITEMS_FAIL = '[EscapeRoom] Load Items Fail'
export const PUT_ITEM_INVENTORY = '[EscapeRoom] Put Item in Inventory'
export const REMOVE_ITEM_INVENTORY = '[EscapeRoom] Remove Item from Inventory'
export const LOAD_ITEMS_OF_OBJECT = '[EscapeRoom] Load Items of Object';


export class LoadItems implements Action {
  readonly type = LOAD_ITEMS;
}

export class LoadItemsFail implements Action {
  readonly type = LOAD_ITEMS_FAIL;
  constructor(public payload: any) { }
}

export class LoadItemsSuccess implements Action {
  readonly type = LOAD_ITEMS_SUCCESS;
  constructor(public payload: Item[]) { }
}

export class PutItemInventory implements Action {
  readonly type = PUT_ITEM_INVENTORY;
  constructor(public payload: Item) { }
}

export class RemoveItemInventory implements Action {
  readonly type = REMOVE_ITEM_INVENTORY;
  constructor(public payload: Item) { }
}

export class LoadItemsOfObject implements Action {
  readonly type = LOAD_ITEMS_OF_OBJECT;
  constructor(public payload: string) { }
}

export type ItemAction = LoadItems | LoadItemsFail | LoadItemsSuccess | PutItemInventory | RemoveItemInventory | LoadItemsOfObject;
