import { Transaction } from './models/transaction.js';

export function transactionIsValid(transactionName: string, transactionAmount: any, transactionsList: Array<Transaction>): boolean {
  if (checkNameInList(transactionName, transactionsList)) {
    alert('An transcation with this name already exists in the list!');
    return false;
  }
  if (!checkIfNumber(transactionAmount)) {
    alert('Only integer numbers are valid are valid options on field value!');
    return false;
  }
  return true;
}

export function checkNameInList(nameToCheck: string, transactionsList: Array<Transaction>): boolean {
  if (transactionsList.length === 0) { return false; }
  let auxiliar = false;
  transactionsList.forEach((transaction) => { if (transaction.name === nameToCheck) { auxiliar = true; } });
  return auxiliar;
}

export function checkIfNumber(value: any): boolean {
  if (value === '0') { return true; }
  // tslint:disable-next-line: radix
  if (parseInt(value)) {
    return !isNaN(Number(value));
  } else { return false; }
}

export function calculateBalance(income: number, expense: number): number {
  return income + expense;
}

export function isExpense(amount: number): boolean {
  return amount < 0 ? true : false;
}

export function isIncome(amount: number): boolean {
  return amount > 0 ? true : false;
}
