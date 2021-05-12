import { Transaction } from './transaction';

export class Expense extends Transaction {
    constructor(transactionName: string, transactionAmount: number) {
        super(transactionName, transactionAmount);
    }
}
