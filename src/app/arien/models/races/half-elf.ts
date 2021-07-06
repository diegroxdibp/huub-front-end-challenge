import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class HalfElf extends Race {

  public static RACE_NAME = "Half-Elf";
  public static RACE_BASE = new RaceBaseAttributes(6, 7, 6, 6, 6)

  constructor() {
    super(HalfElf.RACE_NAME, HalfElf.RACE_BASE);
  };

  getRaceName() {
    return HalfElf.RACE_NAME;
  }
}
