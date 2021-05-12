export class Transaction {
  name: string;
  amount: number;
  isPaid: boolean;
  constructor(transactionName: string, transactionAmount: number, isPaid: boolean = false) {
      this.name = transactionName;
      this.amount = transactionAmount;
      this.isPaid = isPaid;
  }

  togglePaymentStatus(): void {
      this.isPaid = !this.isPaid;
  }
}
