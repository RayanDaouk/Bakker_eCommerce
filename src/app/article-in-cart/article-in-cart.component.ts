import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() updateTotalPrice = new EventEmitter();

  product: any;
  quantity: any;
  totalPrice: any;

  constructor(private _addInCartService: AddInCartService) {}

  ngOnInit(): void {
    this.product = this.item;
    this.quantity = this.count;
    this.totalPrice = this.cost;
    console.log('ThisProduct:', this.product);
  }

  removeCartItem(item: any) {
    console.log('item in cart:', item);
    this._addInCartService.removeCartItem(item);
  }

  updatePriceMultCount(cost: number) {
    this.product.cost = cost;
    this.updateTotalPrice.emit(this.product);
    console.log('InCartUpdPrice:', this.product);
  }

  updateCountOfArticle(count: number) {
    this.product.quantity = count;
    console.log('InCartUpdCount:', this.product);
  }
}
