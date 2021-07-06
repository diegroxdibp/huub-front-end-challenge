import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Erundiel extends Race {

  public static RACE_NAME = "Erundiel";
  public static RACE_BASE = new RaceBaseAttributes(5, 8, 5, 7, 7)

  constructor() {
    super(Erundiel.RACE_NAME, Erundiel.RACE_BASE);
  };

  getRaceName() {
    return Erundiel.RACE_NAME;
  }
}
