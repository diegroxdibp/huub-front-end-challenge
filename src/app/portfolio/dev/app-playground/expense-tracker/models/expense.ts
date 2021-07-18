import { Transaction } from './transaction';

export class Expense extends Transaction {
  name: string;
  amount: number;
  isPaid: boolean;
  date: Date;
  paymentDate: Date;
  deleted: boolean;
  deletionDate: Date;
  constructor(transactionName: string, transactionAmount: number, date: Date = new Date(), isPaid: boolean = false, deleted = false) {
    super(transactionName, transactionAmount, date, isPaid, deleted);
  }

  togglePaymentStatus(): void {
    this.isPaid = !this.isPaid;
    this.paymentDate = new Date();
  }
}
