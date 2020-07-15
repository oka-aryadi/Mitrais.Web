import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyValuePair } from '../../interfaces/key-value-pair.interface';

@Component({
  selector: 'radio-component',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() controlName;
  @Input() list: KeyValuePair[];
  constructor() { }

  ngOnInit(): void {
  }

}
