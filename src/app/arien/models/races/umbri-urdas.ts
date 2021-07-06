import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class UmbriUrdas extends Race {

  public static RACE_NAME = 'Umbri-Urdas';
  public static RACE_BASE = new RaceBaseAttributes(5, 7, 6, 7, 7)

  constructor() {
    super(UmbriUrdas.RACE_NAME, UmbriUrdas.RACE_BASE);
  };

  getRaceName(): string {
    return UmbriUrdas.RACE_NAME;
  }
}
