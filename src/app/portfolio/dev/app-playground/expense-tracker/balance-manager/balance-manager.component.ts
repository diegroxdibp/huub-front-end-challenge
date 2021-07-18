import { Component, OnInit } from '@angular/core';
import { TransactionManagerService } from '../transaction-manager.service';
import { calculateBalance, isExpense, isIncome } from '../transactionsUtils';

@Component({
  selector: 'app-balance-manager',
  templateUrl: './balance-manager.component.html',
  styleUrls: ['./balance-manager.component.scss']
})
export class BalanceManagerComponent implements OnInit {

  constructor(public transactionsManagerService: TransactionManagerService) { }

  ngOnInit(): void {
  }

  updateBalance(transactionAmount: number, toDelete = false): void {
    if (toDelete) {
      if (isIncome(transactionAmount)) { this.transactionsManagerService.incomeTotal -= transactionAmount; }
      if (isExpense(transactionAmount)) { this.transactionsManagerService.expenseTotal -= transactionAmount; }
      if (isExpense(transactionAmount)) { this.transactionsManagerService.expenseCurrent -= transactionAmount; }
    } else {
      if (isIncome(transactionAmount)) { this.transactionsManagerService.incomeTotal += transactionAmount; }
      if (isExpense(transactionAmount)) { this.transactionsManagerService.expenseTotal += transactionAmount; }
      if (isExpense(transactionAmount)) { this.transactionsManagerService.expenseCurrent += transactionAmount; }
    }
    // tslint:disable-next-line: max-line-length
    this.transactionsManagerService.balanceTotal = calculateBalance(this.transactionsManagerService.incomeTotal, this.transactionsManagerService.expenseTotal);
  }
}
