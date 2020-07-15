import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() value: string;
  @Output() onClickEmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onClickEmit.emit();
  }

}
