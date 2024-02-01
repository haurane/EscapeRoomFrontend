import { Item } from "./item.model"

export interface UnlockDTO {
  uuid: string,
  combination: string[],
  items: Item[],
}
