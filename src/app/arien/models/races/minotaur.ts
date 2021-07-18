import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Minotaur extends Race {

  public static RACE_NAME = "Minotaur";
  public static RACE_BASE = new RaceBaseAttributes(9, 4, 9, 6, 4)

  constructor() {
    super(Minotaur.RACE_NAME, Minotaur.RACE_BASE);
  };

  getRaceName() {
    return Minotaur.RACE_NAME;
  }
}
