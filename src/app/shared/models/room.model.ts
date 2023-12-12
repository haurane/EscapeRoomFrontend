export interface Room {
  id: string
  name: string
  description: string
  containedObjects: [
    {
      name: string,
      uuid: string,
    }
  ]
}
