import { Component, OnInit } from '@angular/core';
import { BalanceManagerComponent } from '../balance-manager/balance-manager.component';
import { TransactionManagerService } from '../transaction-manager.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  balanceManager: BalanceManagerComponent;
  displayedColumns = ['name', 'amount'];
  constructor(public transactionsManagerService: TransactionManagerService) {
  }

  ngOnInit(): void {
    this.balanceManager = new BalanceManagerComponent(this.transactionsManagerService);
  }

  getTotalCost(): number {
    return this.transactionsManagerService.transactionsList.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
}
