import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Rhoros extends Race {

  public static RACE_NAME = "Rhoros";
  public static RACE_BASE = new RaceBaseAttributes(7, 7, 6, 5, 6)

  constructor() {
    super(Rhoros.RACE_NAME, Rhoros.RACE_BASE);
  };

  getRaceName() {
    return Rhoros.RACE_NAME;
  }
}
