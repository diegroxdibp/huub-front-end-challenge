import { ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { TransactionManagerService } from './transaction-manager.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.scss']
})
export class ExpenseTrackerComponent implements OnInit, AfterViewInit {
  title = 'expense-tracker';
  // inputs
  @ViewChild('transactionForm') transactionForm: FormGroup;
  @ViewChild('transaction') transaction: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  @ViewChild('submit') submit: MatButton;
  form: FormGroup;
  disableAnimation = true;
  constructor(public transactionsManagerService: TransactionManagerService) {
    this.form = new FormGroup({
      transaction: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    // const amountValue = this.amountStringToNumber(this.form.value.amount);
    const amountValue = parseInt(this.form.value.amount, 10);
    this.transactionsManagerService.add(this.form.value.transaction, amountValue);
    this.form.reset();
    this.form.controls.transaction.setErrors(null);
    this.form.controls.amount.setErrors(null);
    // this.form.controls.amount.clearValidators();
    // this.form.controls.amount.setValidators([Validators.required]);
  }

  ngAfterViewInit(): void {
    // timeout required to avoid the dreaded 'ExpressionChangedAfterItHasBeenCheckedError'
    setTimeout(() => this.disableAnimation = false);
  }
}
