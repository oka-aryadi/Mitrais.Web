import { Component } from '@angular/core';
import { GenderService } from './shared/services/gender.service';
import { FormGroup, FormControl } from '@angular/forms';
import { KeyValuePair } from './shared/interfaces/key-value-pair.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MitraisWeb';
  formGroup: FormGroup;
  list: KeyValuePair[];

  constructor(private genderService: GenderService) {
    this.formGroup = new FormGroup({
      gender: new FormControl('')
    })
    this.genderService.get()
      .pipe(
        tap(data => {
          this.list = data.map(gender => {
            return { key: gender.id, value: gender.name }
          })
        })
      )
      .subscribe(console.log)
  }
}
