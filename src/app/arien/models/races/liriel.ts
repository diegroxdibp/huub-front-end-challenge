import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Liriel extends Race {

  public static RACE_NAME = "Liriel";
  public static RACE_BASE = new RaceBaseAttributes(5, 7, 6, 8, 6)

  constructor() {
    super(Liriel.RACE_NAME, Liriel.RACE_BASE);
  };

  getRaceName() {
    return Liriel.RACE_NAME;
  }
}
