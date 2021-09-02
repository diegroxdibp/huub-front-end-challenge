import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { InnerSpirit, InnerSpirits } from '../models/inner-spirits';
import { Race } from '../models/race';
import { RaceTraits } from '../models/race-traits';
import { getRaceByName, getRacesList } from '../models/races/races-list';
import { byFour, calcCorporalEnergy, calcLevelStageString, calcResistance } from '../utility';

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
    const selectedRace = getRaceByName(race);
    const char = new Character(name, level, getRaceByName(race));
    return char;
  }

  getLvl(): number {
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
      strength: this.character.strengthBase,
      agility: this.character.vigorBase,
      vigor: this.character.vigorBase,
      inteligence: this.character.intelligenceBase,
      essence: this.character.essenceBase,
    };
    return baseAttributes;
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
