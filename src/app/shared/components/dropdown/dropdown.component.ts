import { Component, OnInit, Input } from '@angular/core';
import { KeyValuePair } from '../../interfaces/key-value-pair.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  
  @Input() formGroup: FormGroup;
  @Input() controlName;
  @Input() list: KeyValuePair[];

  constructor() { }

  ngOnInit(): void {
  }

}
