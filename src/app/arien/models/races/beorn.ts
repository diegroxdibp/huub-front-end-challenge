import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Beorn extends Race {

  public static RACE_NAME = "Beorn";
  public static RACE_BASE = new RaceBaseAttributes(8, 4, 8, 5, 6)

  constructor() {
    super(Beorn.RACE_NAME, Beorn.RACE_BASE);
  };

  getRaceName() {
    return Beorn.RACE_NAME;
  }
}
