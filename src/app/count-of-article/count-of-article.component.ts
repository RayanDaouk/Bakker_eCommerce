import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddInCartService } from '../services/add-in-cart.service';

@Component({
  selector: 'app-count-of-article',
  templateUrl: './count-of-article.component.html',
  styleUrls: ['./count-of-article.component.scss'],
})
export class CountOfArticleComponent implements OnInit {
  @Input() public passItemToCart?: any;
  @Input() public price?: number;
  @Input() public quantity: number = 1;
  @Output() public updatePrice = new EventEmitter();
  @Output() public updateQuantity = new EventEmitter();

  product: any;
  cost: any;
  constructor(private addInCartService: AddInCartService) {}

  ngOnInit(): void {
    console.log('passItemToCartTestValue:', this.passItemToCart);
    this.product = this.passItemToCart;
  }

  add(e: any) {
    this.quantity++;
    this.cost = this.product.price * this.quantity;
    this.updatePrice.emit(this.cost);
    this.updateQuantity.emit(this.quantity);
    console.log('ADDproduct:', this.product);
    console.log('ADDcost=', this.cost);
    console.log('ADDquantity=', this.quantity);
  }

  remove(e: any) {
    console.log('LESSproduct:', this.product);
    if (this.quantity > 1) {
      this.quantity--;
    }
    this.cost = this.product.price * this.quantity;
    this.updatePrice.emit(this.cost);
    this.updateQuantity.emit(this.quantity);
    console.log('LESScost=', this.cost);
    console.log('LESSquantity=', this.quantity);
  }
}
