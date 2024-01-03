export interface StaticObject {
  id: string
  name: string
  description: string
  locked: boolean
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
