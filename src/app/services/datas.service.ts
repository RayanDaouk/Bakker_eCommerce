import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  allCollection: any = [];
  collection1: Array<object> = [];
  collection2: Array<object> = [];

  constructor(private http: HttpClient) {
    this.http.get<Array<any>>('http://localhost:3000/datas').subscribe(
      (res: any) => {
        console.log('Get data successfully');
      },
      (error) => {
        alert(
          'Don’t forget to start the JSON server with: json-server --watch db.json    and refresh'
        );
      }
    );
  }

  getDatas$(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:3000/datas');
  }

  updateDatas$(): Observable<Array<any>> {
    console.log('updateDatas$');
    return this.getDatas$();
  }
}
