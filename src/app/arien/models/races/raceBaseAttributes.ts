export class RaceBaseAttributes {
  strength: number;
  agility: number;
  vigor: number;
  intelligence: number;
  essence: number;
  constructor(strength: number, agility: number, vigor: number, intelligence: number, essence: number) {
    this.strength = strength;
    this.agility = agility;
    this.vigor = vigor;
    this.intelligence = intelligence;
    this.essence = essence;
  }
  setRaceBase(base: Array<number>) {
    const raceBase = {
      strength: base[0],
      agility: base[1],
      vigor: base[2],
      intelligence: base[3],
      essence: base[4],
    }
    return raceBase;
  }

  getRaceBase(race: string) {
    // if (race === Human.RACE_NAME) {
    //   return this.setRaceBase([6, 6, 6, 6, 6]);
    // }

    // if (race === AshariEmbeld.RACE_NAME) {
    //   return this.setRaceBase([6, 7, 6, 7, 6]);
    // }

    // if (race === Gnome.RACE_NAME) {
    //   return this.setRaceBase([4, 7, 6, 9, 6]);
    // }

    // if (race === Draconian.RACE_NAME) {
    //   return this.setRaceBase([8, 5, 8, 6, 5]);
    // }

    // if (race === HalfElf.RACE_NAME) {
    //   return this.setRaceBase([6, 7, 6, 6, 6]);
    // }
  }
}
