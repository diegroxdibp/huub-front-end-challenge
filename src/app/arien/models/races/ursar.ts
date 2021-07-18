import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class Ursar extends Race {

  public static RACE_NAME = 'Ursar';
  public static RACE_BASE = new RaceBaseAttributes(7, 5, 7, 5, 8)

  constructor() {
    super(Ursar.RACE_NAME, Ursar.RACE_BASE);
  };

  getRaceName(): string {
    return Ursar.RACE_NAME;
  }
}
