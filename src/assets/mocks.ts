import { Item } from "../app/shared/models/item.model";
import { Room } from "../app/shared/models/room.model";
import { StaticObject } from "../app/shared/models/static-object.model";
import { Story } from "../app/shared/models/story.model";

 export const STORIES: Story[] = [
  {
    title: "Story 1",
     description: "Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1Desc, Story 1",
    id: "1",
     intro: "Intro Story 1",
    firstRoom:"0",
  },
  {
    title: "Story 2",
    description: "Desc, Story 2",
    id: "2",
    intro: "Intro Story 2",
    firstRoom: "1",
  },
  {
    title: "Story 3",
    description: "Desc, Story 3",
    id: "3",
    intro: "Intro Story 3",
    firstRoom: "2",
  },
]

export const ROOMS: Room[] = [
  {
    id: "1",
    name: "Room 1",
    description: "Desc, Room 1",
  },
  {
    id: "2",
    name: "Room 2",
    description: "Desc, Room 2",
  },
  {
    id: "3",
    name: "Room 3",
    description: "Desc, Room 3",
  },
]

export const STATIC_OBJECTS: StaticObject[] = [
  {
    id: "1",
    name: "StatObj 1",
    description: "Desc, StatObj 1",
  },
  {
    id: "2",
    name: "StatObj 2",
    description: "Desc, StatObj 2",
  },
  {
    id: "3",
    name: "StatObj 3",
    description: "Desc, StatObj 3",
  },
]

export const ITEMS: Item[] = [
  {
    id: "1",
    name: "Item 1",
    description: "Desc, Item 1",
  },
  {
    id: "2",
    name: "StatObj 2",
    description: "Desc, StatObj 2",
  },
  {
    id: "2",
    name: "StatObj 3",
    description: "Desc, StatObj 3",
  },
]
