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

  constructor(private http: HttpClient) {}

  // ici je renvoie un observable, le typage s'écrit aussi <any[]>
  // un observable est de base asynchrone
  getDatas$(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:3000/datas');
  }

  updateDatas$(): Observable<Array<any>> {
    console.log('updateDatas$');
    return this.getDatas$();
  }
}
