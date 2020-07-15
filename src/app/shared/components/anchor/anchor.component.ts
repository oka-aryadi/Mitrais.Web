import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anchor-component',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;
  constructor() { }

  ngOnInit(): void {
  }

}
