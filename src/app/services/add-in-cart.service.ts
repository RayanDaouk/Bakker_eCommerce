import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddInCartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  total: number = 0; //price
  targetUpdate: any;
  constructor() {}

  getProducts() {
    console.log('TESTnumbProd:', this.productList.asObservable());
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    console.log('addToCartProduct:', product);
    //Check if product is in array
    if (this.cartItemList.indexOf(product) !== -1) {
      //if it's already here, update quantity
      this.targetUpdate = this.cartItemList.indexOf(product);
      console.log('targetUpdate:', this.targetUpdate);
      this.cartItemList[this.targetUpdate].quantity = product.quantity;
      console.log('service cartItemList:', this.cartItemList);
    } else {
      // if is not here, push
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
      console.log('service cartItemList:', this.cartItemList);
    }
  }
  getTotalPrice(): number {
    this.total = 0;
    this.cartItemList.map((item: any) => {
      this.total += item.cost;
    });
    console.log('totalSERVICE:', this.total);
    return this.total;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((item: any, index: any) => {
      if (product.id === item.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList); //update observable
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
