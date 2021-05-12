import { Injectable } from '@angular/core';
import { Expense } from './models/expense';
import { Income } from './models/income';
import { Transaction } from './models/transaction';
import { isExpense, isIncome } from './transactionsUtils';

@Injectable({
  providedIn: 'root'
})
export class TransactionManagerService {
  transactionsList: Array<Transaction>;
  incomeTotal: number;
  expenseTotal: number;
  balanceTotal: number;
  expenseCurrent: number;
  expensePaid: number;
  expensePaidList: Array<Expense>;
  expensePendingList: Array<Expense>;
  expenseAllList: Array<Expense>;
  incomeList: Array<Income>;

  constructor() {
    this.transactionsList = [new Transaction('ass', 3)];
    this.incomeTotal = 0;
    this.expenseCurrent = 0;
    this.expensePaid = 0;
    this.expenseTotal = 0;
    this.balanceTotal = 0;
    this.updateTransactionsManager();
  }

  add(transactionName: string, transactionAmount: number): Transaction {
    let newTransaction: Transaction;
    if (isIncome(transactionAmount)) {
      this.incomeTotal += transactionAmount;
      newTransaction = new Income(transactionName, transactionAmount);
    }
    if (isExpense(transactionAmount)) {
      this.expenseCurrent += transactionAmount;
      newTransaction = new Expense(transactionName, transactionAmount);
    }
    this.transactionsList.push(newTransaction);
    this.updateTransactionsManager();
    return newTransaction;
  }

  sortTransactionsList(): Array<Transaction> {
    const sortedTransactionslit = this.transactionsList.sort((a: Transaction, b: Transaction) => {
      return a.amount - b.amount;
    });
    this.transactionsList = sortedTransactionslit;
    return sortedTransactionslit;
  }

  delete(transactionToRemove: Transaction): void {
    this.transactionsList = this.transactionsList.filter(transaction => transaction.name !== transactionToRemove.name);
    this.updateTransactionsManager();
  }

  togglePaymentStatus(transaction: Transaction): void {
    transaction.togglePaymentStatus();
    if (transaction.isPaid) {
      this.expensePaid += transaction.amount;
      this.expenseCurrent -= transaction.amount;
      this.balanceTotal -= transaction.amount;
    } else {
      this.expensePaid -= transaction.amount;
      this.expenseCurrent += transaction.amount;
      this.balanceTotal += transaction.amount;
    }
    this.updateTransactionsManager();
  }

  updateTransactionsManager(): void {
    this.updateExpensesTotal();
    this.getPaidExpensesList();
    this.getPendingExpensesList();
    this.getAllExpensesList();
    this.getAllIncomesList();
    this.updateBalance();
  }

  getTransactionsList(): Array<Transaction> {
    return this.transactionsList;
  }

  getPaidExpensesList(): Array<Expense> {
    const paidExpensesList = this.transactionsList.filter(transaction => transaction instanceof Expense && transaction.isPaid);
    this.expensePaidList = paidExpensesList;
    return paidExpensesList;
  }

  getPendingExpensesList(): Array<Expense> {
    const pendingExpensesList = this.transactionsList.filter(transaction => transaction instanceof Expense && transaction.isPaid === false);
    this.expensePendingList = pendingExpensesList;
    return pendingExpensesList;
  }

  getAllExpensesList(): Array<Expense> {
    const allExpensesList = this.transactionsList.filter(transaction => transaction instanceof Expense);
    this.expensePendingList = allExpensesList;
    return allExpensesList;
  }

  getAllIncomesList(): Array<Expense> {
    const allIncomesList = this.transactionsList.filter(transaction => transaction instanceof Income);
    this.expensePendingList = allIncomesList;
    return allIncomesList;
  }

  updateExpensesTotal(): number {
    const newTotal = this.expenseCurrent + this.expensePaid;
    this.expenseTotal = newTotal;
    return newTotal;
  }

  updateBalance(): number {
    const newBalance = this.incomeTotal + this.expenseCurrent;
    this.balanceTotal = newBalance;
    return newBalance;
  }
}
