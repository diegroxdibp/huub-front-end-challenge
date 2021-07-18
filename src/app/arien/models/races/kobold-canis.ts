import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class KoboldCanis extends Race {

  public static RACE_NAME = 'Kobold-Canis';
  public static RACE_BASE = new RaceBaseAttributes(4, 10, 6, 5, 7);

  constructor() {
    super(KoboldCanis.RACE_NAME, KoboldCanis.RACE_BASE);
  };

  getRaceName(): string {
    return KoboldCanis.RACE_NAME;
  }
}
