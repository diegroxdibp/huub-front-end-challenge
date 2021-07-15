import { IResponse } from './Iresponse';
import { Products } from './Products';

export class Response implements IResponse {
  code: number;
  data: Products[];
  details: string;
  message: string;
  paginator: any;
  requestIdentifier: string;

  constructor(code: number, data: Products[], details: string, message: string, paginator: any, requestIdentifier: string) {
    this.code = code;
    this.data = data;
    this.details = details;
    this.message = message;
    this.paginator = paginator;
    this.requestIdentifier = requestIdentifier;
  }
}
