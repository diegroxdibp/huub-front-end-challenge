import { RaceBaseAttributes } from './races/raceBaseAttributes';

export class Attributes {
  baseRace: RaceBaseAttributes;
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
  // strength = { base: { raceBase: 0, baseModifiers: new BaseModifiers() }, increment: 0, bonus: 0 };
  // agility = { base: { raceBase: 0, baseModifiers: new BaseModifiers() }, increment: 0, bonus: 0 };
  // vigor = { base: { raceBase: 0, baseModifiers: new BaseModifiers() }, increment: 0, bonus: 0 };
  // intelligence = { base: { raceBase: 0, baseModifiers: new BaseModifiers() }, increment: 0, bonus: 0 };
  // essence = { base: { raceBase: 0, baseModifiers: new BaseModifiers() }, increment: 0, bonus: 0 };

  constructor(raceBaseAttributes: RaceBaseAttributes) {
    this.baseRace = raceBaseAttributes;
    // this.strength.base.raceBase = raceBaseAttributes.strength;
    // this.agility.base.raceBase = raceBaseAttributes.agility;
    // this.vigor.base.raceBase = raceBaseAttributes.vigor;
    // this.intelligence.base.raceBase = raceBaseAttributes.intelligence;
    // this.essence.base.raceBase = raceBaseAttributes.essence;
  }

  get strengthBase(): number {
    let baseMod;
    this.strengthBaseModifiers.length !== 0  ? baseMod = this.strengthBaseModifiers : baseMod = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return this.baseRace.strength + baseMod;
  }

  get strengthBonuses(): number {
    let strBonuses;
    this.strengthBonus.length !== 0 ? strBonuses = this.strengthBonus : strBonuses = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return strBonuses;
  }

  get strengthTotal(): number {
    const strengthTotal = this.strengthBase + this.strengthIncrement + this.strengthBonuses;
    return strengthTotal;
  }

  get agilityBase(): number {
    let baseMod;
    this.agilityBaseModifiers.length !== 0  ? baseMod = this.agilityBaseModifiers : baseMod = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return this.baseRace.agility + baseMod;
  }

  get agilityBonuses(): number {
    let agilityBonuses;
    this.agilityBonus.length !== 0  ? agilityBonuses = this.agilityBonus : agilityBonuses = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return agilityBonuses;
  }

  get agilityTotal(): number {
    const agilityTotal = this.agilityBase + this.agilityIncrement + this.agilityBonuses;
    return agilityTotal;
  }

  get vigorBase(): number {
    let baseMod;
    this.vigorBaseModifiers.length !== 0  ? baseMod = this.vigorBaseModifiers : baseMod = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return this.baseRace.vigor + baseMod;
  }

  get vigorBonuses(): number {
    let vigorBonuses;
    this.vigorBonus.length !== 0  ? vigorBonuses = this.vigorBonus : vigorBonuses = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return vigorBonuses;
  }

  get vigorTotal(): number {
    const vigorTotal = this.vigorBase + this.vigorIncrement + this.vigorBonuses;
    return vigorTotal;
  }

  get intelligenceBase(): number {
    let baseMod;
    this.intelligenceBaseModifiers.length !== 0  ? baseMod = this.intelligenceBaseModifiers : baseMod = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return this.baseRace.intelligence + baseMod;
  }

  get intelligenceBonuses(): number {
    let intelligenceBonuses;
    this.intelligenceBonus.length !== 0  ? intelligenceBonuses = this.intelligenceBonus : intelligenceBonuses = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return intelligenceBonuses;
  }

  get intelligenceTotal(): number {
    const intelligenceTotal = this.intelligenceBase + this.intelligenceIncrement + this.intelligenceBonuses;
    return intelligenceTotal;
  }

  get essenceBase(): number {
    let baseMod;
    this.essenceBaseModifiers.length !== 0  ? baseMod = this.essenceBaseModifiers : baseMod = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return this.baseRace.essence + baseMod;
  }

  get essenceBonuses(): number {
    let essenceBonuses;
    this.essenceBonus.length !== 0  ? essenceBonuses = this.strengthBonus : essenceBonuses = 0;
    // const modsTotal = this.strength.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
    return essenceBonuses;
  }

  get essenceTotal(): number {
    const essenceTotal = this.essenceBase + this.essenceIncrement + this.essenceBonuses;
    return essenceTotal;
  }

  // get agilityBase(): number {
  //   const raceBase = this.agility.base.raceBase;
  //   const modsTotal = this.agility.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
  //   return raceBase + modsTotal;
  // }

  // get agilityTotal(): number {
  //   const agilityTotal = this.agility.increment + this.agility.increment + this.agility.bonus;
  //   return agilityTotal;
  // }

  // get vigorBase(): number {
  //   const raceBase = this.vigor.base.raceBase;
  //   const modsTotal = this.vigor.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
  //   return raceBase + modsTotal;
  // }

  // get vigorTotal(): number {
  //   const vigorTotal = this.vigor.increment + this.vigor.increment + this.vigor.bonus;
  //   return vigorTotal;
  // }

  // get intelligenceBase(): number {
  //   const raceBase = this.intelligence.base.raceBase;
  //   const modsTotal = this.intelligence.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
  //   return raceBase + modsTotal;
  // }

  // get intelligenceTotal(): number {
  //   const intelligenceTotal = this.intelligence.increment + this.intelligence.increment + this.intelligence.bonus;
  //   return intelligenceTotal;
  // }

  // get essenceBase(): number {
  //   const raceBase = this.essence.base.raceBase;
  //   const modsTotal = this.essence.base.baseModifiers.modifiers.reduce((t, { value }) => t + value, 0);
  //   return raceBase + modsTotal;
  // }

  // get essenceTotal(): number {
  //   const essenceTotal = this.essence.increment + this.essence.increment + this.essence.bonus;
  //   return essenceTotal;
  // }
}
