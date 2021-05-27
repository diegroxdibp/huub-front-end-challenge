export class Transaction {
  name: string;
  amount: number;
  date: Date;
  isPaid: boolean;
  paymentDate: Date;
  deleted: boolean;
  deletionDate: Date;
  constructor(transactionName: string, transactionAmount: number, date: Date = new Date(), isPaid: boolean = false, deleted = false) {
    this.name = transactionName;
    this.amount = transactionAmount;
    this.date = date;
    this.isPaid = isPaid;
    this.deleted = deleted;
  }

  togglePaymentStatus(): void {
    this.isPaid = !this.isPaid;
    this.paymentDate = new Date();
  }

  delete(): void {
    this.deleted = true;
  }
}
