import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class AshariEmbeld extends Race {

  public static RACE_NAME = 'Ashari-Embeld';
  public static RACE_BASE = new RaceBaseAttributes(6, 7, 6, 7, 6);

  constructor() {
    super(AshariEmbeld.RACE_NAME, AshariEmbeld.RACE_BASE);
  }

  getRaceName(): string {
    return AshariEmbeld.RACE_NAME;
  }
}
