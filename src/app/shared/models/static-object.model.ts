export interface StaticObject {
  id: string
  name: string
  description: string
  isLocked: boolean
  combination: [
    string
  ]
  heldItems: [
    {
      uuid: string,
      name: string,
    }
  ]
  requiredItems: [
    {
      uuid: string,
      name: string,
    }
  ]
  
}
