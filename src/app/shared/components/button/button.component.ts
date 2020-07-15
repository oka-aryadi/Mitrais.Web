import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
