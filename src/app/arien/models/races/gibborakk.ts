import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Gibborakk extends Race {

  public static RACE_NAME = "Gibborakk";
  public static RACE_BASE = new RaceBaseAttributes(10, 4, 9, 4, 5)

  constructor() {
    super(Gibborakk.RACE_NAME, Gibborakk.RACE_BASE);
  };

  getRaceName() {
    return Gibborakk.RACE_NAME;
  }
}
