export interface StaticObject {
  uuid: string
  name: string
  description: string
  locked: boolean
  combination: [
    string
  ]
  heldItems: itemSummary[],
  requiredItems: itemSummary[],
  
}

export interface itemSummary {
  uuid: string,
  name: string,
}
