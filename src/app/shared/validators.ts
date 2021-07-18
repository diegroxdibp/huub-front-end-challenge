import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function isPriorToDate(dateToCheck: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const now = new Date();
    const isPriorToDateCheck = dateToCheck < now;
    return isPriorToDateCheck ? { checkedDate: { value: control.value } } : null;
  };
}

export function dateLessThan(firstDate: string, secondDate: string): ValidatorFn {
  return (form: FormGroup): { [key: string]: boolean } | null => {
    const firstDateValue = form.get(firstDate).value;
    let secondDateValue;
    if (secondDate !== 'now') { secondDateValue = form.get(secondDate).value; }
    if (!firstDateValue || !secondDateValue) {
      return { missing: true };
    }

    const firstDateNew = new Date(firstDateValue);
    let secondDateNew;
    if (secondDate !== 'now') {
      secondDateNew = form.get(secondDate).value;
    } else {
      secondDateNew = new Date();
    }

    if (firstDateNew.getTime() < secondDateNew.getTime()) {
      const error = { dateLessThan: true };
      form.get(firstDate).setErrors(error);
      return error;
    } else {
      const dateLessError = form.get(firstDate).hasError('dateLessThan');
      if (dateLessError) {
        delete form.get(firstDate).errors['dateLessThan'];
        form.get(firstDate).updateValueAndValidity();
      }
    }
  };
}
