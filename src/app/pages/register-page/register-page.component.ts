import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { KeyValuePair } from 'src/app/shared/interfaces/key-value-pair.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { mobileNumberValidator, emailValidator, validate } from '../../shared/custom-validator';
import { PostUser, UserService } from 'src/app/shared/services/user.service';
import { catchError, finalize, delay } from 'rxjs/operators';
import { empty, of } from 'rxjs';

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
  errorMessage: string;
  disabled: boolean;

  constructor(private activedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.formGroup = new FormGroup({
      mobileNumber: new FormControl('', [Validators.required, mobileNumberValidator]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      month: new FormControl(''),
      date: new FormControl(''),
      year: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl('', [Validators.required, emailValidator]),
    }, this.dateValidator.bind(this));

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
    this.disabled = true;
    this.errorMessage = "";

    let model = new PostUser();
    model.mobileNumber = this.formGroup.controls.mobileNumber.value;
    model.firstName = this.formGroup.controls.firstName.value;
    model.lastName = this.formGroup.controls.lastName.value;
    if (this.month && this.date && this.year) {
      var momentObj = moment(`${this.month}-${this.date}-${this.year}`, "MM-DD-YYYY");
      if (momentObj.isValid()) {
        model.dateOfBirth = momentObj.toDate();
      }
    }

    if (this.formGroup.controls.gender.value) {
      model.genderId = this.formGroup.controls.gender.value;
    }

    model.email = this.formGroup.controls.email.value;
    
    this.userService.post(model)
      .subscribe(
        next => {
          this.disabled = true;
          this.router.navigate(['', 'success']);
        },
        errorObj => {
          this.errorMessage = errorObj.error;
          this.disabled = false;
        })
  }

  dateValidator() {
    if (this.month || this.date || this.year) {
      if (!this.month || !this.date || !this.year) {
        return { invalidDate: true }
      }

      const momentObj = moment(`${this.month}-${this.date}-${this.year}`, "MM-DD-YYYY");
      if (!momentObj.isValid()) {
        return { invalidDate: true }
      }
    }

    return null;
  }

  onValidate(controlName, errorObj) {
    return validate(this.formGroup, controlName, errorObj);
  }

  get month(): string {
    return this.formGroup ? this.formGroup.controls.month.value : '';
  }

  get date(): string {
    return this.formGroup ? this.formGroup.controls.date.value : '';
  }

  get year(): string {
    return this.formGroup ? this.formGroup.controls.year.value : '';
  }

}
