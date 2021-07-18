import { AshariEmbeld } from "./races/ashari-embeld";
import { Human } from "./races/human";

export class RaceTraits {
  constructor(race: string) {
    this.getRaceTrait(race);
  }

  getRaceTrait(race: string) {

    if (race === Human.RACE_NAME) {
      return Human.RACE_NAME;
    }

    if (race === AshariEmbeld.RACE_NAME) {
      return AshariEmbeld.constructor.name;
    }

  }
}
