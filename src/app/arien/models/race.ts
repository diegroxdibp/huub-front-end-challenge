import { Feat } from '../feats/feat';
import { Attributes } from './attributes';
import { RaceBaseAttributes } from './races/raceBaseAttributes';

export abstract class Race {
  // Race name
  raceName: string;
  // Race Attributes
  attributes: RaceBaseAttributes;
  // racialTraits:
  feats: Feat[];

  constructor(race: string, raceBaseAttributes: RaceBaseAttributes, feats: Feat[] = []) {
    this.raceName = race;
    this.attributes = raceBaseAttributes;
    this.feats = feats;
  }

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
  //   this.attributes.essence.total = this.attributes.essence.base + this.attributes.essence.increment + this.attributes.essence.bonus;
  // }

}
