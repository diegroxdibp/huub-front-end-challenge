import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Garous extends Race {

  public static RACE_NAME = "Garous";
  public static RACE_BASE = new RaceBaseAttributes(7, 7, 6, 5, 6)

  constructor() {
    super(Garous.RACE_NAME, Garous.RACE_BASE);
  };

  getRaceName() {
    return Garous.RACE_NAME;
  }
}
