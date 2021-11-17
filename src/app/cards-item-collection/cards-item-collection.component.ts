import { Component, OnInit, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cards-item-collection',
  templateUrl: './cards-item-collection.component.html',
  styleUrls: ['./cards-item-collection.component.scss'],
})
export class CardsItemCollectionComponent implements OnInit {
  /* ------------------------------------ . ----------------------------------- */
  @Input() public item?: any;
  @Input() public src?: string;
  @Input() public text?: string;
  @Input() public itemName?: string;
  @Input() public price?: number;
  isActived: boolean;
  public targetItem = new BehaviorSubject<any>({});
  itemReadyToPass: any;

  constructor() {
    this.isActived = false;
  }

  ngOnInit(): void {}

  enabled() {
    this.isActived = !this.isActived;
    this.targetItem.next(this.item);
    console.log('itemReady:', this.targetItem.value);
  }
}
