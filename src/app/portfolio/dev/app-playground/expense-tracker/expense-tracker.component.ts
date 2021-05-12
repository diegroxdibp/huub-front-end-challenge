import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { TransactionManagerService } from './transaction-manager.service';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.scss']
})
export class ExpenseTrackerComponent implements OnInit {
  title = 'expense-tracker';
  // inputs
  transactionNameInput: HTMLInputElement;
  transactionAmountInput: HTMLInputElement;
  form: FormGroup;
  constructor(public transactionsManagerService: TransactionManagerService) {
    this.form = new FormGroup({
      transaction: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // this.form.valueChanges.subscribe(form => {
    //   if (form.amount) {
    //     this.form.patchValue({
    //       amount: this.currencyPipe.transform(form.amount.replace(/\D/g, '').replace(/^0+/, ''), 'USD', 'symbol', '1.0-0')
    //     }, { emitEvent: false });
    //   }
    // });
  }

  onSubmit(): void {
    // const amountValue = this.amountStringToNumber(this.form.value.amount);
    const amountValue = parseInt(this.form.value.amount, 10);
    console.log(amountValue);
    this.transactionsManagerService.add(this.form.value.transaction, amountValue);
    this.transactionsManagerService.updateTransactionsManager();
    console.log(this.transactionsManagerService);
  }

  // submit(form): void {
  //   console.log(form.value);
  // }

  // amountStringToNumber(amount: string): number {
  //   let amountValue: number;
  //   amountValue = parseInt(amount.replace(/\D/, ''), 10);
  //   return amountValue;
  // }
}
