export interface Room {
  uuid: string
  name: string
  description: string
  containedObjects: [
    {
      name: string,
      uuid: string,
    }
  ]
}
