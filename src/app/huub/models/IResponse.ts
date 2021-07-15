import { Products } from './Products';

export interface IResponse {
  code: number;
  data: Products[];
  details: string;
  message: string;
  paginator: any;
  requestIdentifier: string;
}
