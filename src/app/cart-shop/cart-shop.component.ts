import { Component, OnInit } from '@angular/core';

import { AddInCartService } from '../services/add-in-cart.service';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.scss'],
})
export class CartShopComponent implements OnInit {
  isActivated: boolean;
  numberArticles!: number;
  productList: any = [];
  totalCost: number | string = 0;

  constructor(private _AddInCartService: AddInCartService) {
    this.isActivated = false;
  }

  ngOnInit() {
    console.log('start calc');
    this._AddInCartService.getProducts().subscribe((res) => {
      this.numberArticles = res.length;
      console.log('res:', res);
      this.productList = res;
      this.totalCost = this._AddInCartService.getTotalPrice().toFixed(2);
      console.log('totalCost:', this.totalCost);
    });
  }

  enabled() {
    this.isActivated = true;
  }
  disabled() {
    this.isActivated = false;
  }
}
