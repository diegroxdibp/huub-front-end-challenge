import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class AnvilDwarf extends Race {

  public static RACE_NAME = 'Anvil-Dwarf';
  public static RACE_BASE = new RaceBaseAttributes(7, 5, 8, 7, 5);

  constructor() {
    super(AnvilDwarf.RACE_NAME, AnvilDwarf.RACE_BASE);
  };

  getRaceName(): string {
    return AnvilDwarf.RACE_NAME;
  }
}
