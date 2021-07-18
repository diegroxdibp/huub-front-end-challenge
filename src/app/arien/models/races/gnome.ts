import { Race } from "../race";
import { RaceBaseAttributes } from "./raceBaseAttributes";

export class Gnome extends Race {

  public static RACE_NAME = "Gnome";
  public static RACE_BASE = new RaceBaseAttributes(4, 7, 6, 9, 6)
  constructor() {
    super(Gnome.RACE_NAME, Gnome.RACE_BASE);
  };

  getRaceName() {
    return Gnome.RACE_NAME;
  }
}
