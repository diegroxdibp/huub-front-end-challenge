import { IProduct } from './IProduct';

export interface IResponse {
  code: number;
  data: IProduct[];
  details: string;
  message: string;
  paginator: any;
  requestIdentifier: string;
}
