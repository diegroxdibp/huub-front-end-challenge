import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class HalfOrc extends Race {

  public static RACE_NAME = 'Half-Orc';
  public static RACE_BASE = new RaceBaseAttributes(8, 5, 7, 5, 6);

  constructor() {
    super(HalfOrc.RACE_NAME, HalfOrc.RACE_BASE);
  };

  getRaceName(): string {
    return HalfOrc.RACE_NAME;
  }
}
