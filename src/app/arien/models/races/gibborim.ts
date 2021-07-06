import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class Gibborim extends Race {

  public static RACE_NAME = 'Gibborim';
  public static RACE_BASE = new RaceBaseAttributes(10, 4, 9, 4, 5);

  constructor() {
    super(Gibborim.RACE_NAME, Gibborim.RACE_BASE);
  };

  getRaceName(): string {
    return Gibborim.RACE_NAME;
  }
}
