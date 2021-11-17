import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.scss'],
})
export class LargeCardComponent implements OnInit {
  @Input() public src?: string;
  @Input() public text?: string;
  @Input() public tag?: string;

  constructor() {}

  ngOnInit(): void {}
}
