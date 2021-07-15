import { IProducts } from './IProducts';

export interface IResponse {
  code: number;
  data: IProducts[];
  details: string;
  message: string;
  paginator: any;
  requestIdentifier: string;
}
