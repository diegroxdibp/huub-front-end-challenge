import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { InnerSpirit, InnerSpirits } from '../models/inner-spirits';
import { Race } from '../models/race';
import { RaceTraits } from '../models/race-traits';
import { getRaceByName, getRacesList } from '../models/races/races-list';
import { addBonuses, byFour, calcCorporalEnergy, calcLevelStageString, calcResistance } from '../utility';

@Injectable({
  providedIn: 'root'
})
export class CharacterBuilderService {
  racesList: Array<Race>;
  character: Character;
  level: number;
  raceTraits: RaceTraits;
  innerSpirits: InnerSpirits;

  constructor() {
    this.racesList = getRacesList();
  }

  createCharacter(name: string = '<NO_NAME>', level: number = 1, race: string): Character {
    return new Character(name, level, getRaceByName(race));
  }

  createBaseCharacter(name: string, race: string): Character {
    const level = 1;
    const char = new Character(name, level, getRaceByName(race));
    return char;
  }

  getLvl() {
    return this.level;
  }

  setSkillPoints(level: number = 1): number {
    return 1;
  }

  lvlUp(character: Character): Character {
    character.level++;
    return character;
  }

  setLvl(character: Character, level: number): Character {
    character.level = level;
    return character;
  }

  getBaseAttributes() {
    const baseAttributes = {
      strength: this.character.attributes.strengthBase,
      agility: this.character.attributes.agilityBase,
      vigor: this.character.attributes.vigorBase,
      inteligence: this.character.attributes.intelligenceBase,
      essence: this.character.attributes.essenceBase,
    };
    return baseAttributes;
  }

  getAttributes(...bonuses) {
    const bonus = bonuses;
    const baseAttributes = this.getBaseAttributes();
    const attributes = {
      strength: baseAttributes.strength + addBonuses(0),
      agility: baseAttributes.agility + addBonuses(0),
      vigor: baseAttributes.vigor + addBonuses(0),
      inteligence: baseAttributes.inteligence + addBonuses(0),
      essence: baseAttributes.essence + addBonuses(0),
    };
    return attributes;
  }

  getPhysicalResistance(): number {
    const attributes = this.getAttributes();
    return calcResistance(attributes.strength, attributes.vigor);
  }

  getMentalResistance(): number {
    const attributes = this.getAttributes();
    return calcResistance(attributes.inteligence, attributes.essence);
  }

  getCorporalEnergy(): number {
    const attributes = this.getAttributes();
    const corporalEnergy = calcCorporalEnergy(this.level, attributes.vigor, attributes.essence, 0);
    return corporalEnergy;
  }

  getSkills() {
    const attributes = this.getAttributes();
    const skills = {
      athletics: byFour(attributes.strength, attributes.agility),
      stealth: byFour(attributes.agility, attributes.inteligence),
      initiative: byFour(attributes.agility, attributes.inteligence),
      ride: byFour(attributes.essence, attributes.inteligence),
      perception: 6,
      prestidigitation: byFour(attributes.agility, attributes.agility),
      society: byFour(attributes.inteligence, attributes.inteligence),
    };
    return skills;
  }

  getLevelStage(): string {
    return calcLevelStageString(this.level);
  }

  testInnerSpirit(innerSpirit: InnerSpirit, bonus: number = 0) {
    const result = innerSpirit.testInnerSpirit(this.level, bonus);
    return result;
  }

  // getRaceFromList(race: string): Race {
  //   if (race === Human.RACE_NAME) {
  //     return new Human;
  //   }

  //   if (race === AshariEmbeld.RACE_NAME) {
  //     return new AshariEmbeld;
  //   }

  //   if (race === Gnome.RACE_NAME) {
  //     return new Gnome;
  //   }

  //   if (race === Draconian.RACE_NAME) {
  //     return new Draconian;
  //   }

  //   if (race === HalfElf.RACE_NAME) {
  //     return new HalfElf;
  //   }
  // };
}
