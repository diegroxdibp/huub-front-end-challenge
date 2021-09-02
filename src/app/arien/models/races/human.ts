import { AcceleratedLearning } from '../../feats/accelerated-learning';
import { HeirToTheStar } from '../../feats/heir-to-thes-star';
import { Race } from '../race';
import { RaceBaseAttributes } from './raceBaseAttributes';

export class Human extends Race {

  public static RACE_NAME = 'Human';
  public static RACE_BASE = new RaceBaseAttributes(6, 6, 6, 6, 6);
  public static FEATS = [new AcceleratedLearning(), new HeirToTheStar()];
  constructor() {
    super(Human.RACE_NAME, Human.RACE_BASE, Human.FEATS);
  }

  getRaceName(): string {
    return Human.RACE_NAME;
  }
}
