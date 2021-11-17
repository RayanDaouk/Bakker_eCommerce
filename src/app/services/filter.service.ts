import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  newList: any[] = [];
  getSavedCollection: any[] = [];
  constructor() {}

  filteringPrice(
    min: number = 0,
    max: number = 999,
    articleList: any[],
    savedCollection: any[]
  ) {
    this.getSavedCollection = savedCollection;
    articleList = savedCollection;
    this.newList = articleList.filter((item: any) => {
      return item.price > min && item.price < max;
    });
    console.log('filter0_19:', this.newList);
    return this.newList;
  }
}
