import { Component, OnInit, Input } from '@angular/core';
import { AddInCartService } from '../services/add-in-cart.service';

@Component({
  selector: 'app-article-in-cart',
  templateUrl: './article-in-cart.component.html',
  styleUrls: ['./article-in-cart.component.scss'],
})
export class ArticleInCartComponent implements OnInit {
  @Input() public item?: any;
  @Input() public img?: string;
  @Input() public text?: string;
  @Input() public count?: number;
  @Input() public price?: number;
  @Input() public cost?: number;
  constructor(private _addInCartService: AddInCartService) {}

  ngOnInit(): void {}

  removeCartItem(item: any) {
    this._addInCartService.removeCartItem(item);
  }
}
