/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { DatasService } from '../services/datas.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  giftList: any = [];
  // déclaration de l'observable, on peut l'init que via le "of([])"
  datas$: Observable<Array<any>> = of([]);

  constructor(private datasService: DatasService) {}

  ngOnInit() {
    this.datas$ = this.datasService.getDatas$();
    this.datas$.subscribe((res: any) => {
      console.log('datas res:', res);
      this.giftList = res;
    });

    // ATTENTION: il faut ajouter dans tes boucles HTML ceci: |async pour lui dire que c'est de la data async ex ds le html "cards-menu" dans ngFor*:       datas$ |async
    console.log('allCollectionINnavBar:', this.datas$);
  }

  // To update Data:
  updateDatas() {
    this.datas$ = this.datasService.updateDatas$();
  }
}

// this.datas$ = this.datasService.getDatas$().subscribe((res: any) => {});
