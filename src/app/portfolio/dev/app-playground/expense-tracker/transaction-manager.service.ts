import { Injectable } from '@angular/core';
import { Expense } from './models/expense';
import { Register } from './models/register';
import { Income } from './models/income';
import { Transaction } from './models/transaction';
import { isExpense, isIncome } from './transactionsUtils';

@Injectable({
  providedIn: 'root'
})
export class TransactionManagerService {
  transactionsList: Array<Transaction>;
  transactionsHistory: Array<Register>;
  balanceTotal: number;
  incomeTotal: number;
  expenseTotal: number;
  expensePaid: number;
  expenseCurrent: number;
  incomeList: Array<Income>;
  expenseList: Array<Expense>;
  expensePaidList: Array<Expense>;
  expensePendingList: Array<Expense>;

  constructor() {
    this.transactionsList = [];
    this.transactionsHistory = [];
  }

  add(transactionName: string, transactionAmount: number): void {
    let newTransaction: Transaction;
    if (isIncome(transactionAmount)) {
      newTransaction = new Income(transactionName, transactionAmount);
    }
    if (isExpense(transactionAmount)) {
      newTransaction = new Expense(transactionName, transactionAmount);
    }
    this.transactionsList.push(newTransaction);
    const register = new Register('added', newTransaction, newTransaction.date);
    this.transactionsHistory.push(register);
  }

  togglePaymentStatus(transaction: Expense): void {
    transaction.togglePaymentStatus();
    if (transaction.isPaid) {
      this.expensePaid += transaction.amount;
      this.expenseCurrent -= transaction.amount;
      this.balanceTotal -= transaction.amount;
      const register = new Register('paid', transaction, new Date());
      this.transactionsHistory.push(register);
    } else {
      this.expensePaid -= transaction.amount;
      this.expenseCurrent += transaction.amount;
      this.balanceTotal += transaction.amount;
      const register = new Register('payment revoked', transaction, new Date());
      this.transactionsHistory.push(register);
    }
  }

  delete(transactionToBeRemoved: Transaction): void {
    this.transactionsList.forEach((transaction: Transaction) => {
      if (transaction.name === transactionToBeRemoved.name) {
        const register = new Register('deleted', transaction, new Date());
        this.transactionsHistory.push(register);
        transaction.delete();
        const transactionIndex = this.transactionsList.indexOf(transaction);
        this.transactionsList.splice(transactionIndex, 1);
      }
    });
    this.transactionsList.filter((transaction: Transaction) => transaction.name !== transactionToBeRemoved.name);
    console.log(this.transactionsList);
  }

  sortTransactionsList(): Array<Transaction> {
    const sortedTransactionslit = this.transactionsList.sort((a: Transaction, b: Transaction) => {
      return a.amount - b.amount;
    });
    this.transactionsList = sortedTransactionslit;
    return sortedTransactionslit;
  }

  getTransactionsList(): Array<Transaction> {
    return this.transactionsList;
  }

  getIncomesList(): Array<Income> {
    const incomesList = this.transactionsList.filter((transaction: Transaction) => transaction instanceof Income);
    return incomesList || [];
  }

  getExpensesList(): Array<Expense> {
    const expensesList: Expense[] = this.transactionsList.filter((transaction: Transaction) => transaction instanceof Expense);
    return expensesList || [];
  }

  getPaidExpensesList(): Array<Expense> {
    const expensesList: Expense[] = this.getExpensesList();
    const paidExpensesList = expensesList.filter((expense: Expense) => expense.isPaid);
    return paidExpensesList || [];
  }

  getExpensesPendingList(): Array<Expense> {
    const expensesList: Expense[] = this.getExpensesList();
    const pendingExpensesList = expensesList.filter((expense: Expense) => expense.isPaid = false);
    return pendingExpensesList || [];
  }

  getIncomeTotalValue(): number {
    const incomesList = this.getIncomesList();
    let incomesTotalValue = 0;
    incomesList.forEach((expense: Expense) => incomesTotalValue += expense.amount);
    return incomesTotalValue || 0;
  }

  getExpensesTotalValue(): number {
    const expensesList = this.getExpensesList();
    let expensesTotalValue = 0;
    expensesList.forEach((expense: Expense) => expensesTotalValue += expense.amount);
    return expensesTotalValue || 0;
  }

  getExpensesPaidTotal(): number {
    const paidExpensesList = this.getPaidExpensesList();
    let paidExpensesTotal = 0;
    paidExpensesList.forEach((expense: Expense) => paidExpensesTotal += expense.amount);
    return paidExpensesTotal || 0;
  }

  getExpensesCurrentTotal(): number {
    const currentExpensesTotal = this.getExpensesTotalValue() - this.getExpensesPaidTotal();
    return currentExpensesTotal || 0;
  }

  getBalance(): number {
    const incomeTotal = this.getIncomeTotalValue();
    const expensesTotal = this.getExpensesCurrentTotal();
    const balance = incomeTotal + expensesTotal;
    return balance || 0;
  }
}
