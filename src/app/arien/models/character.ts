import { Skills } from './skills';
import { byFour, calcCorporalEnergy, calcFeatsByLevel, calcLevelStageString, calcResistance, calcSkillsByLevel } from '../utility';
import { Attributes } from './attributes';
import { InnerSpirits } from './inner-spirits';
import { Race } from './race';
import { RaceTraits } from './race-traits';

export class Character {
  name: string;
  level: number;
  race: Race;
  attributes: Attributes;
  skills: Skills;
  featPoints: number;
  skillPoints: number;
  raceTraits: RaceTraits;
  innerSpirits: InnerSpirits;

  constructor(name: string, level: number = 1, race: Race) {
    this.name = name;
    this.level = level;
    this.race = race;
    this.attributes = race.attributes;
    this.skills = new Skills(this.level, this.attributes);
    this.innerSpirits = new InnerSpirits();
    // this.raceTraits = new RaceTraits(race.raceName);
    this.featPoints = calcFeatsByLevel(level);
    this.skillPoints = calcSkillsByLevel(level);
    // this.attributes = this.getAttributes();
    // this.skills = this.getSkills();
    // this.corporalEnergy = this.getCorporalEnergy();
    // this.physicalResistence = this.getPhysicalResistance();
    // this.mentalResistence = this.getMentalResistance();

  }

  get corporalEnergy(): number {
    return calcCorporalEnergy(this.level, this.attributes.vigorTotal, this.attributes.essenceTotal);
  }

  get physicalResistance(): number {
    return calcResistance(this.attributes.strengthTotal, this.attributes.vigorTotal);
  }

  get mentalResistance(): number {
    return calcResistance(this.attributes.intelligenceTotal, this.attributes.essenceTotal);
  }

  // get skills() {
  //   const skills = {
  //     athletics: byFour(this.attributes.strengthTotal, this.attributes.agilityTotal),
  //     stealth: byFour(this.attributes.agilityTotal, this.attributes.intelligenceTotal),
  //     initiative: byFour(this.attributes.agilityTotal, this.attributes.intelligenceTotal),
  //     ride: byFour(this.attributes.essenceTotal, this.attributes.intelligenceTotal),
  //     perseption: 6,
  //     prestidigitation: this.attributes.agilityTotal / 2,
  //     society: this.attributes.intelligenceTotal / 2,
  //   };
  //   return skills;
  // }
  // getBaseAttributes() {
  //   const baseAttributes = {
  //     strength: this.race.strength,
  //     agility: this.race.agility,
  //     vigor: this.race.vigor,
  //     inteligence: this.race.inteligence,
  //     essence: this.race.essence,
  //   };
  //   return baseAttributes;
  // }

  // getAttributes() {
  //   const baseAttributes = this.getBaseAttributes();
  //   const attributes = {
  //     strength: baseAttributes.strength + addBonuses(),
  //     agility: baseAttributes.agility + addBonuses(),
  //     vigor: baseAttributes.vigor + addBonuses(),
  //     inteligence: baseAttributes.inteligence + addBonuses(),
  //     essence: baseAttributes.essence + addBonuses(),
  //   };
  //   return attributes;
  // }

  // getSkills() {
  //   const attributes = this.getAttributes();
  //   const skills = {
  //     athletics: byFour(attributes.strength, attributes.agility),
  //     stealth: byFour(attributes.agility, attributes.inteligence),
  //     initiative: byFour(attributes.agility, attributes.inteligence),
  //     ride: byFour(attributes.essence, attributes.inteligence),
  //     perseption: 6,
  //     prestidigitation: attributes.agility / 2,
  //     society: attributes.inteligence / 2,
  //   };
  // }

  // getlvl() {
  //   console.log(this.level)
  // }

  // getLevelStage(): string {
  //   return calcLevelStageString(this.level);
  // }

  // testInnerSpirit(innerSpirit: InnerSpirit, bonus: number = 0) {
  //   const result = innerSpirit.testInnerSpirit(this.level, bonus);
  //   return result;
  // }
}

