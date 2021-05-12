import { Transaction } from './transaction';

export class Income extends Transaction {

    transactionName: string;
    transactionAmount: number;
    constructor(transactionName: string, transactionAmount: number) {
        super(transactionName, transactionAmount);
    }
}
