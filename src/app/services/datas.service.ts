import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  collection1: Array<object> = [];
  collection2: Array<object> = [];

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/datas').subscribe(
      (response: any) => {
        console.log('GET HTTP:', response);
        this.collection1 = response[0].collection;
        this.collection2 = response[1].collection;
      },
      (error: any) => {
        console.error('Get data from json server failed:', error);
      }
    );
  }
}
