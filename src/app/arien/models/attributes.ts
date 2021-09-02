
export class Attributes {
  strength: number;
  agility: number;
  vigor: number;
  intelligence: number;
  essence: number;

  constructor(strength: number = 0, agility: number = 0, vigor: number = 0, intelligence: number = 0, essence: number = 0) {
    this.strength = strength;
    this.agility = agility;
    this.vigor = vigor;
    this.intelligence = intelligence;
    this.essence = essence;
  }
}
