import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { KeyValuePair } from 'src/app/shared/interfaces/key-value-pair.interface';

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

  constructor() {
    this.formGroup = new FormGroup({
      mobileNumber: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      month: new FormControl(''),
      date: new FormControl(''),
      year: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl('', Validators.required),
    })

    this.months.push(...moment.months().map((value, index) => {
      return { key: (index + 1).toString(), value: value }
    }));
    this.dates.push(...Array.from(Array(31), (_, i) => i + 1).map(value => {
      return { key: value.toString(), value: value.toString() }
    }));

    for (var i = 1950; i <= 2020; i++) {
      this.years.push({ key: i.toString(), value: i.toString() })
    }

  }

  ngOnInit(): void {
  }

}
