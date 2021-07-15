import { IProducts } from './IProducts';

export class Products implements IProducts {
  currencyIso3code: string;
  description: string;
  fabric: string;
  family: string;
  id: number;
  name: string;
  season: string;
  subfamily: string;
  supplier: string;
  type: string;
  variants;

  constructor(currencyIso3code: string, description: string, fabric: string, family: string, id: number,
              name: string, season: string, subfamily: string, supplier: string, type: string, variants) {
    this.currencyIso3code = currencyIso3code;
    this.description = description;
    this.fabric = fabric;
    this.family = family;
    this.id = id;
    this.name = name;
    this.season = season;
    this.subfamily = subfamily;
    this.type = type;
    this.variants = variants;
  }
}
