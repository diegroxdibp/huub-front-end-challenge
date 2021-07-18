import { Attributes } from "./attributes";
import { Human } from "./races/human";
import { RaceBaseAttributes } from "./races/raceBaseAttributes";

export abstract class Race {
  // Race name
  raceName: string;
  // Race Attributes
  attributes: Attributes;
  // racialTraits:

  constructor(race: string, raceBaseAttributes: RaceBaseAttributes) {
    this.raceName = race;
    this.attributes = new Attributes(raceBaseAttributes);
  };

  abstract getRaceName(): string;

  // setRaceBaseAttribute(strength: number, agility: number, vigor: number, inteligence: number, essence: number) {
  //   this.attributes.strength.base = strength;
  //   this.attributes.agility.base = agility;
  //   this.attributes.vigor.base = vigor;
  //   this.attributes.intelligence.base = inteligence;
  //   this.attributes.essence.base = essence;
  //   this.calcAttributeTotal()
  // }

  // calcAttributeTotal(): void {
  //   this.attributes.strength.total = this.attributes.strength.base + this.attributes.strength.increment + this.attributes.strength.bonus;
  //   this.attributes.agility.total = this.attributes.agility.base + this.attributes.agility.increment + this.attributes.agility.bonus;
  //   this.attributes.vigor.total = this.attributes.vigor.base + this.attributes.vigor.increment + this.attributes.vigor.bonus;
  //   this.attributes.intelligence.total = this.attributes.intelligence.base + this.attributes.intelligence.increment + this.attributes.intelligence.bonus;
  //   this.attributes.essence.total = this.attributes.essence.base + this.attributes.essence.increment + this.attributes.essence.bonus;
  // }

  getRaceTraits() {

  }
}
