import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Draconian extends Race {

  public static RACE_NAME = "Draconian";
  public static RACE_BASE = new RaceBaseAttributes(8, 5, 8, 6, 5)

  constructor() {
    super(Draconian.RACE_NAME, Draconian.RACE_BASE);
  };

  getRaceName() {
    return Draconian.RACE_NAME;
  }
}
