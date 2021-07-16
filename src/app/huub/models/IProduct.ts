export interface IProduct {
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
  variants: Array<object>;
}
