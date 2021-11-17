import { Injectable } from '@angular/core';
import dataCollection from '../data/ideeCadeau.json';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  collection1: Array<object> = [];
  collection2: Array<object> = [];
  collection3: Array<object> = [];
  collection4: Array<object> = [];

  constructor() {}

  getCollection1(): Array<object> {
    return (this.collection1 = dataCollection[0].collection);
  }

  getCollection2(): Array<object> {
    return (this.collection2 = dataCollection[1].collection);
  }

  getCollection3(): Array<object> {
    return (this.collection3 = dataCollection[2].collection);
  }

  getCollection4(): Array<object> {
    return (this.collection4 = dataCollection[3].collection);
  }
}
