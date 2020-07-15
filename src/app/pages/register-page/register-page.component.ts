import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { KeyValuePair } from 'src/app/shared/interfaces/key-value-pair.interface';
import { ActivatedRoute } from '@angular/router';
import { mobileNumberValidator, emailValidator, validate } from '../../shared/custom-validator';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  formGroup: FormGroup;
  months: KeyValuePair[] = [{ key: '', value: 'Month' }];
  dates: KeyValuePair[] = [{ key: '', value: 'Date' }];
  years: KeyValuePair[] = [{ key: '', value: 'Year' }];
  genders: KeyValuePair[] = [];

  constructor(private activedRoute: ActivatedRoute) {
    this.formGroup = new FormGroup({
      mobileNumber: new FormControl('', [Validators.required, mobileNumberValidator]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      month: new FormControl(''),
      date: new FormControl(''),
      year: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl('', [Validators.required, emailValidator]),
    }, this.dateValidator);

    this.months.push(...moment.months().map((value, index) => {
      return { key: (index + 1).toString(), value: value }
    }));
    this.dates.push(...Array.from(Array(31), (value, index) => index + 1).map(value => {
      return { key: value.toString(), value: value.toString() }
    }));

    for (let i = 1950; i <= 2020; i++) {
      this.years.push({ key: i.toString(), value: i.toString() })
    }

    this.genders.push(...this.activedRoute.snapshot.data.genders.map(p => {
      return { key: p.id, value: p.name }
    }))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  dateValidator(form: FormGroup) {
    const month = form.controls.month.value;
    const date = form.controls.date.value;
    const year = form.controls.year.value;

    if (month || date || year) {
      if (!month || !date || !year) {
        return { invalidDate: true }
      }

      const momentObj = moment(`${month}-${date}-${year}`, "MM-DD-YYYY");
      if(!momentObj.isValid()) {
        return { invalidDate: true }
      }
    }

    return null;
  }

  onValidate(controlName, errorObj) {
    return validate(this.formGroup, controlName, errorObj);
  }

}
