import { Transaction } from './transaction';

export class Income extends Transaction {
  name: string;
  amount: number;
  date: Date;
  deleted: boolean;
  deletionDate: Date;
  constructor(transactionName: string, transactionAmount: number, date: Date = new Date(), deleted = false) {
    super(transactionName, transactionAmount, date, deleted);
  }
}
