import { Component, OnInit } from '@angular/core';
import { TransactionManagerService } from '../transaction-manager.service';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss']
})
export class ExpensesDetailsComponent implements OnInit {

  constructor(public transactionsManagerService: TransactionManagerService) { }

  ngOnInit(): void {
  }

}
