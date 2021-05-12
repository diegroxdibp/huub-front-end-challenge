import { AfterViewInit, Component, DoCheck, IterableDiffers, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Transaction } from '../models/transaction';
import { TransactionManagerService } from '../transaction-manager.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements AfterViewInit, OnInit, DoCheck {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Transaction>;
  // dataSource: TransactionsTableDataSource;
  dataSource: MatTableDataSource<Transaction>;
  iterableDiffer;
  constructor(
    private transactionsManagerService: TransactionManagerService,
    private iterableDiffers: IterableDiffers
  ) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }
  displayedColumns = ['name', 'amount'];
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.transactionsManagerService.transactionsList);
  }

  ngDoCheck(): void {
    const changes = this.iterableDiffer.diff(this.transactionsManagerService.transactionsList);
    if (changes) {
      console.log('changed');
      this.dataSource = new MatTableDataSource(this.transactionsManagerService.transactionsList);
      this.dataSource.sort = this.sort;
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getTotalCost(): number {
    return this.transactionsManagerService.transactionsList.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
}
