import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class Auriel extends Race {

  public static RACE_NAME = 'Auriel';
  public static RACE_BASE = new RaceBaseAttributes(5, 7, 6, 7, 7);

  constructor() {
    super(Auriel.RACE_NAME, Auriel.RACE_BASE);
  };

  getRaceName(): string {
    return Auriel.RACE_NAME;
  }
}
