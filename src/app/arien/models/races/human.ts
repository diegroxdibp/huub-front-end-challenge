import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Human extends Race {

  public static RACE_NAME = "Human";
  public static RACE_BASE = new RaceBaseAttributes(6, 6, 6, 6, 6)

  constructor() {
    super(Human.RACE_NAME, Human.RACE_BASE);
  };

  getRaceName() {
    return Human.RACE_NAME;
  }
}
