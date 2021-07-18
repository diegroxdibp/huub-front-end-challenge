import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class IordrinAnzem extends Race {

  public static RACE_NAME = "Iordrin-Anzem";
  public static RACE_BASE = new RaceBaseAttributes(6, 7, 6, 6, 7)

  constructor() {
    super(IordrinAnzem.RACE_NAME, IordrinAnzem.RACE_BASE);
  };

  getRaceName() {
    return IordrinAnzem.RACE_NAME;
  }
}
