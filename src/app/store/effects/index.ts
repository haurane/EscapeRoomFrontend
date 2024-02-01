import { ItemEffects } from "./items.effects";
import { RoomEffects } from "./room.effects";
import { StaticObjectEffects } from "./staticobjects.effects";

export const effects = [RoomEffects, StaticObjectEffects, ItemEffects]

export * from "./room.effects";
export * from "./staticobjects.effects"
