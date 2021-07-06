import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class HammerDwarf extends Race {

  public static RACE_NAME = 'Hammer-Dwarf';
  public static RACE_BASE = new RaceBaseAttributes(8, 5, 9, 6, 4);

  constructor() {
    super(HammerDwarf.RACE_NAME, HammerDwarf.RACE_BASE);
  };

  getRaceName(): string {
    return HammerDwarf.RACE_NAME;
  }
}
