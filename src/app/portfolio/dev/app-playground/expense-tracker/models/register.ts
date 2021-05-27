import { Transaction } from './transaction';

export class Register {
  action: string;
  transaction: Transaction;
  actionDate: Date;
  constructor(action: string, transaction: Transaction, actionDate: Date = new Date()) {
    this.action = action;
    this.transaction = transaction;
    this.actionDate = actionDate;
  }
}
