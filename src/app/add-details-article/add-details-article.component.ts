import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddInCartService } from '../services/add-in-cart.service';

@Component({
  selector: 'app-add-details-article',
  templateUrl: './add-details-article.component.html',
  styleUrls: ['./add-details-article.component.scss'],
})
export class AddDetailsArticleComponent implements OnInit {
  /* ------------------------------------ . ----------------------------------- */
  @Input() public passItemToCart?: any;
  @Input() public src?: string;
  @Input() public text?: string;
  @Input() public itemName?: string; //can be remove
  @Input() public price?: number;

  @Output() showHide = new EventEmitter();

  product: any;
  quantity: number = 1;
  cost: any;
  addOrUpdate: Array<boolean> = [false, false];
  constructor(private _addInCartService: AddInCartService) {}

  ngOnInit(): void {
    this.cost = this.price;
    this.product = this.passItemToCart.value;
    console.log('product:', this.product.price);
  }

  disabledPop() {
    this.product = undefined;
    this.showHide.emit();
    console.log('click and product=:', this.product);
  }

  add() {
    this.quantity++;
    this.cost = this.product.price * this.quantity;
    console.log('cost=', this.cost);
  }

  remove(e: any) {
    console.log(e);
    if (this.quantity > 1) {
      this.quantity--;
    }
    this.cost = this.product.price * this.quantity;
    console.log('cost=', this.cost);
  }

  addToCart() {
    this.product.cost = this.cost;
    this.product.quantity = this.quantity;
    console.log('Add in cart:', this.product);
    this.addOrUpdate = this._addInCartService.addToCart(
      this.product,
      this.addOrUpdate
    );
  }
}
