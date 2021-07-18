import { Ursar } from './ursar';
import { Rhoros } from './rhoros';
import { Minotaur } from './minotaur';
import { Liriel } from './liriel';
import { KoboldCanis } from './kobold-canis';
import { HalfOrc } from './half-orc';
import { Gibborim } from './gibborim';
import { Gibborakk } from './gibborakk';
import { Garous } from './garous';
import { Erundiel } from './erundiel';
import { Race } from '../race';
import { AnvilDwarf } from './anvil-dwarf';
import { AshariEmbeld } from './ashari-embeld';
import { Auriel } from './auriel';
import { Beorn } from './beorn';
import { Draconian } from './dracionan';
import { Gnome } from './gnome';
import { HalfElf } from './half-elf';
import { Human } from './human';
import { HammerDwarf } from './hammer-dwarf';
import { IordrinAnzem } from './iordrin-anzem';
import { UmbriUrdas } from './umbri-urdas';

export function getRacesList(): Array<Race> {
  const racesList = [];
  racesList.push(new Human());
  racesList.push(new AshariEmbeld());
  racesList.push(new HalfElf());
  racesList.push(new Draconian());
  racesList.push(new AnvilDwarf());
  racesList.push(new Auriel());
  racesList.push(new Beorn());
  racesList.push(new Gnome());
  racesList.push(new Erundiel());
  racesList.push(new Garous());
  racesList.push(new Gibborakk());
  racesList.push(new Gibborim());
  racesList.push(new HalfOrc());
  racesList.push(new HammerDwarf());
  racesList.push(new IordrinAnzem());
  racesList.push(new HammerDwarf());
  racesList.push(new KoboldCanis());
  racesList.push(new Liriel());
  racesList.push(new Minotaur());
  racesList.push(new Rhoros());
  racesList.push(new UmbriUrdas());
  racesList.push(new Ursar());
  racesList.sort(sortRacesList);
  return racesList;
}

export function sortRacesList(a: Race, b: Race): number {
  if (a.raceName < b.raceName) {
    return -1;
  }
  if (a.raceName > b.raceName) {
    return 1;
  }
  return 0;
}


export function getRaceByName(raceName: string): Race {
  const racesracesList = getRacesList();
  const race = racesracesList.filter(raceInList => raceInList.raceName.toLowerCase() === raceName.toLowerCase());
  return race[0];
}
