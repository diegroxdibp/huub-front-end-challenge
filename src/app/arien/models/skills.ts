import { byFour, calcLevelStage, skillIncrementLimit } from '../utility';
import { Attributes } from './attributes';
import { Bonus } from './bonus';

export class Skills {
  private attributes: Attributes;
  // athletics: {};
  private ATHLETICS_INCREMENT = 0;
  private ATHLETICS_BONUS: number;
  private ATHLETICS_BONUS_TOTAL: number;
  private ATHLETICS_TOTAL: number;
  // stealth: {};
  private STEALTH_BASE: number;
  private STEALTH_INCREMENT: number;
  private STEALTH_BONUS: number;
  private STEALTH_TOTAL: number;
  // initiative: ;
  ride;
  perseption;
  strengthBaseModifiers = [];
  strengthIncrement = 0;
  private strengthBonus = [];
  agilityBaseModifiers = [];
  agilityIncrement = 0;
  private agilityBonus = [];
  vigorBaseModifiers = [];
  vigorIncrement = 0;
  private vigorBonus = [];
  intelligenceBaseModifiers = [];
  intelligenceIncrement = 0;
  private intelligenceBonus = [];
  essenceBaseModifiers = [];
  essenceIncrement = 0;
  private essenceBonus = [];

  constructor(private level: number, attributes: Attributes) {
    this.attributes = attributes;
  }

  addBonus(bonus: Bonus): void {

  }

  get athleticsBase(): number {
    return this.calcAthleticsBase(this.attributes.strengthTotal, this.attributes.agilityTotal);
  }

  calcAthleticsBase(strength: number, agility: number): number {
    return byFour(strength, agility);
  }

  get athleticsIncrement(): number {
    return this.ATHLETICS_INCREMENT;
  }

  // set athleticsIncrement(increment: number) {
  //   if (increment > skillIncrementLimit(this.level)) {
  //     throw new Error(`The skill increment of your level stage is ${skillIncrementLimit(this.level)}`);
  //   }
  //   this.ATHLETICS_INCREMENT = increment;
  // }

  get athleticsBonus(): number {
    return this.calcAthleticsBonus();
  }

  calcAthleticsBonus(...bonus: Array<Bonus>): number {
    let totalBonus: number;
    if (bonus.length === 0) {
      totalBonus = 0;
    } else {
      totalBonus = bonus.reduce((t, n) => t + n.value, 0);
    }
    return totalBonus;
  }

  get athleticsTotal(): number {
    return this.athleticsBase + this.athleticsIncrement + this.athleticsBonus;
  }

  get skills() {
    const skills = {
      athletics: byFour(this.attributes.strengthTotal, this.attributes.agilityTotal),
      stealth: byFour(this.attributes.agilityTotal, this.attributes.intelligenceTotal),
      initiative: byFour(this.attributes.agilityTotal, this.attributes.intelligenceTotal),
      ride: byFour(this.attributes.essenceTotal, this.attributes.intelligenceTotal),
      perseption: 6,
      prestidigitation: this.attributes.agilityTotal / 2,
      society: this.attributes.intelligenceTotal / 2,
    };
    return skills;
  }
}
