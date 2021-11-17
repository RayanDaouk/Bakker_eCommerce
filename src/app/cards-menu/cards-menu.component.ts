import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.scss'],
})
export class CardsMenuComponent implements OnInit {
  @Input() public src?: string;
  @Input() public text?: string;
  @Input() public nameCollection?: string;

  constructor() {}

  ngOnInit(): void {}
}
