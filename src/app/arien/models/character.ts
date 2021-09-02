import { Skills } from './skills';
import { byFour, byTwo, calcCorporalEnergy, calcFeatsByLevel, calcLevelStageString, calcResistance, calcSkillsByLevel } from '../utility';
import { Attributes } from './attributes';
import { InnerSpirits } from './inner-spirits';
import { Race } from './race';
import { RaceTraits } from './race-traits';
import { Feat } from '../feats/feat';
import { RaceBaseAttributes } from './races/raceBaseAttributes';
import { Progression } from './progressions';

export class Character {
  name: string;
  level: number;
  race: Race;
  raceBaseAttributes: RaceBaseAttributes;
  skillsIncrements: Skills;
  featPoints: number;
  skillPoints: number;
  raceTraits: RaceTraits;
  innerSpirits: InnerSpirits;
  feats = [];
  progression: Progression;
  constructor(name: string, level: number = 1, race: Race) {
    this.name = name;
    this.level = level;
    this.race = race;
    this.raceBaseAttributes = race.attributes;
    this.feats.push(...race.feats);
    this.skillsIncrements = new Skills();
    this.innerSpirits = new InnerSpirits();
    this.progression = new Progression();
    this.featPoints = calcFeatsByLevel(level);
    this.skillPoints = calcSkillsByLevel(level);
  }

  get attributesTotal(): Attributes {
    const attributes = new Attributes(
      this.strengthTotal, this.agilityTotal, this.vigorTotal, this.intelligenceTotal, this.essenceTotal
    );
    return attributes;
  }

  get strengthBaseMod(): number {
    const baseMod = this.feats.filter(feat => feat.tags.includes('base') && feat.tags.includes('strength'));
    return baseMod.length;
  }

  get strengthBase(): number {
    const base = this.raceBaseAttributes.strength + this.strengthBaseMod;
    return base;
  }

  get strengthIncrement(): number {
    const increments = this.feats.filter(feat => feat.tags.includes('increment') && feat.tags.includes('strength'));
    return increments.length;
  }

  get strengthBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('strength'));
    return bonus.length;
  }

  get strengthTotal(): number {
    const total = this.strengthBase + this.strengthIncrement + this.strengthBonus;
    return total;
  }


  get agilityBaseMod(): number {
    const baseMod = this.feats.filter(feat => feat.tags.includes('base') && feat.tags.includes('agility'));
    return baseMod.length;
  }

  get agilityBase(): number {
    const base = this.raceBaseAttributes.agility + this.agilityBaseMod;
    return base;
  }

  get agilityIncrement(): number {
    const increments = this.feats.filter(feat => feat.tags.includes('increment') && feat.tags.includes('agility'));
    return increments.length;
  }

  get agilityBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('agility'));
    return bonus.length;
  }

  get agilityTotal(): number {
    const total = this.agilityBase + this.agilityIncrement + this.agilityBonus;
    return total;
  }


  get vigorBaseMod(): number {
    const baseMod = this.feats.filter(feat => feat.tags.includes('base') && feat.tags.includes('vigor'));
    return baseMod.length;
  }

  get vigorBase(): number {
    const base = this.raceBaseAttributes.vigor + this.vigorBaseMod;
    return base;
  }

  get vigorIncrement(): number {
    const increments = this.feats.filter(feat => feat.tags.includes('increment') && feat.tags.includes('vigor'));
    return increments.length;
  }

  get vigorBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('vigor'));
    return bonus.length;
  }

  get vigorTotal(): number {
    const total = this.vigorBase + this.vigorIncrement + this.vigorBonus;
    return total;
  }


  get intelligenceBaseMod(): number {
    const baseMod = this.feats.filter(feat => feat.tags.includes('base') && feat.tags.includes('intelligence'));
    return baseMod.length;
  }

  get intelligenceBase(): number {
    const base = this.raceBaseAttributes.intelligence + this.intelligenceBaseMod;
    return base;
  }

  get intelligenceIncrement(): number {
    const increments = this.feats.filter(feat => feat.tags.includes('increment') && feat.tags.includes('intelligence'));
    return increments.length;
  }

  get intelligenceBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('intelligence'));
    return bonus.length;
  }

  get intelligenceTotal(): number {
    const total = this.intelligenceBase + this.intelligenceIncrement + this.intelligenceBonus;
    return total;
  }


  get essenceBaseMod(): number {
    const baseMod = this.feats.filter(feat => feat.tags.includes('base') && feat.tags.includes('essence'));
    return baseMod.length;
  }

  get essenceBase(): number {
    const base = this.raceBaseAttributes.essence + this.essenceBaseMod;
    return base;
  }

  get essenceIncrement(): number {
    const increments = this.feats.filter(feat => feat.tags.includes('increment') && feat.tags.includes('essence'));
    return increments.length;
  }

  get essenceBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('essence'));
    return bonus.length;
  }

  get essenceTotal(): number {
    const total = this.essenceBase + this.essenceIncrement + this.essenceBonus;
    return total;
  }

  get athleticsBase(): number {
    return byFour(this.strengthTotal, this.agilityTotal);
  }

  get athleticsIncrement(): number {
    return this.skillsIncrements.athetics;
  }

  get athleticsBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('athletics'));
    return bonus.length;
  }

  get athleticsTotal(): number {
    const total = this.athleticsBase + this.athleticsIncrement + this.athleticsBonus;
    return total;
  }

  get stealthBase(): number {
    return byFour(this.agilityTotal, this.intelligenceTotal);
  }

  get stealthIncrement(): number {
    return this.skillsIncrements.stealth;
  }

  get stealthBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('stealth'));
    return bonus.length;
  }

  get stealthTotal(): number {
    const total = this.stealthBase + this.stealthIncrement + this.stealthBonus;
    return total;
  }

  get initiativeBase(): number {
    return byFour(this.agilityTotal, this.intelligenceTotal);
  }

  get initiativeIncrement(): number {
    return this.skillsIncrements.initiative;
  }

  get initiativeBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('initiative'));
    return bonus.length;
  }

  get initiativeTotal(): number {
    const total = this.initiativeBase + this.initiativeIncrement + this.initiativeBonus;
    return total;
  }

  get ridingBase(): number {
    return byFour(this.agilityTotal, this.intelligenceTotal);
  }

  get ridingIncrement(): number {
    return this.skillsIncrements.riding;
  }

  get ridingBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('riding'));
    return bonus.length;
  }

  get ridingTotal(): number {
    const total = this.ridingBase + this.ridingIncrement + this.ridingBonus;
    return total;
  }

  get natureBase(): number {
    return byFour(this.essenceTotal, this.intelligenceTotal);
  }

  get natureIncrement(): number {
    return this.skillsIncrements.nature;
  }

  get natureBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('nature'));
    return bonus.length;
  }

  get natureTotal(): number {
    const total = this.natureBase + this.natureIncrement + this.natureBonus;
    return total;
  }

  // senses

  get visionBase(): number {
    return 1;
  }

  get visionIncrement(): number {
    return 0;
  }

  get visionBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('vision'));
    return bonus.length;
  }

  get visionTotal(): number {
    const total = this.visionBase + this.visionIncrement + this.visionBonus;
    return total;
  }

  get hearingBase(): number {
    return 1;
  }

  get hearingIncrement(): number {
    return 0;
  }

  get hearingBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('hearing'));
    return bonus.length;
  }

  get hearingTotal(): number {
    const total = this.hearingBase + this.hearingIncrement + this.hearingBonus;
    return total;
  }

  get tasteBase(): number {
    return 1;
  }

  get tasteIncrement(): number {
    return 0;
  }

  get tasteBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('taste'));
    return bonus.length;
  }

  get tasteTotal(): number {
    const total = this.tasteBase + this.tasteIncrement + this.tasteBonus;
    return total;
  }

  get touchBase(): number {
    return 1;
  }

  get touchIncrement(): number {
    return 0;
  }

  get touchBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('touch'));
    return bonus.length;
  }

  get touchTotal(): number {
    const total = this.touchBase + this.touchIncrement + this.touchBonus;
    return total;
  }

  get smellBase(): number {
    return 1;
  }

  get smellIncrement(): number {
    return 0;
  }

  get smellBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('smell'));
    return bonus.length;
  }

  get smellTotal(): number {
    const total = this.smellBase + this.smellIncrement + this.smellBonus;
    return total;
  }

  get intuitionBase(): number {
    return 1;
  }

  get intuitionIncrement(): number {
    return 0;
  }

  get intuitionBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('smell'));
    return bonus.length;
  }

  get intuitionTotal(): number {
    const total = this.intuitionBase + this.intuitionIncrement + this.intuitionBonus;
    return total;
  }

  get perceptionBase(): number {
    return this.visionTotal + this.hearingTotal + this.tasteTotal + this.touchTotal + this.smellTotal + this.intuitionTotal;
  }

  get perceptionIncrement(): number {
    return 0;
  }

  get perceptionBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('perception'));
    return bonus.length;
  }

  get perceptionTotal(): number {
    const total = this.perceptionBase + this.perceptionIncrement + this.perceptionBonus;
    return total;
  }

  //

  get prestidigitationBase(): number {
    return byTwo(this.agilityTotal);
  }

  get prestidigitationIncrement(): number {
    return this.skillsIncrements.prestidigitation;
  }

  get prestidigitationBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('prestidigitation'));
    return bonus.length;
  }

  get prestidigitationTotal(): number {
    const total = this.prestidigitationBase + this.prestidigitationIncrement + this.prestidigitationBonus;
    return total;
  }

  get societyBase(): number {
    return byTwo(this.intelligenceTotal);
  }

  get societyIncrement(): number {
    return this.skillsIncrements.prestidigitation;
  }

  get societyBonus(): number {
    const bonus = this.feats.filter(feat => feat.tags.includes('bonus') && feat.tags.includes('society'));
    return bonus.length;
  }

  get societyTotal(): number {
    const total = this.societyBase + this.societyIncrement + this.societyBonus;
    return total;
  }



  addFeatPoints(amountOfPoints: number): void {
    this.featPoints = this.featPoints + amountOfPoints;
  }

  removeFeatPoints(amountOfPoints: number): void {
    this.featPoints = this.featPoints - amountOfPoints;
  }

  get corporalEnergy(): number {
    return calcCorporalEnergy(this.level, this.attributesTotal.vigor, this.attributesTotal.essence);
  }

  get physicalResistance(): number {
    return calcResistance(this.attributesTotal.strength, this.attributesTotal.vigor);
  }

  get mentalResistance(): number {
    return calcResistance(this.attributesTotal.intelligence, this.attributesTotal.essence);
  }
}
