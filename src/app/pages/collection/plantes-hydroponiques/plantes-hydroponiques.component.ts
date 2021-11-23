import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../../services/datas.service';
import { FilterService } from '../../../services/filter.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-plantes-hydroponiques',
  templateUrl: './plantes-hydroponiques.component.html',
  styleUrls: ['./plantes-hydroponiques.component.scss'],
})
export class PlantesHydroponiquesComponent implements OnInit {
  datas$: Observable<Array<any>> = of([]);
  collection: any = [];
  savedCollection: any[] = [];

  constructor(
    private datasService: DatasService,
    private _FilterService: FilterService
  ) {
    // this.savedCollection = this._DatasService.collection1;
  }
  ngOnInit(): void {
    this.getCollection();
  }

  getCollection() {
    console.log('getCollection');
    this.datas$ = this.datasService.getDatas$();
    console.log('datas$TEST:', this.datas$);
    this.datas$.subscribe((res: any) => {
      this.collection = res[0].collection;
      this.savedCollection = this.collection;
    });
  }
  getFilter(toggle: Array<boolean>) {
    console.log('toggle', toggle, 'collection:', this.collection);
    toggle[0]
      ? (this.collection = this._FilterService.filteringPrice(
          0,
          19,
          this.collection,
          this.savedCollection
        ))
      : null;

    toggle[1]
      ? (this.collection.next = this._FilterService.filteringPrice(
          20,
          29,
          this.collection,
          this.savedCollection
        ))
      : null;
    toggle[2]
      ? (this.collection = this._FilterService.filteringPrice(
          30,
          39,
          this.collection,
          this.savedCollection
        ))
      : null;
    toggle[3]
      ? (this.collection = this._FilterService.filteringPrice(
          40,
          49,
          this.collection,
          this.savedCollection
        ))
      : null;
    return this.collection;
  }

  // getFilter(toggle: Array<boolean>) {
  //   this.getCollection();
  //   console.log('toggle', toggle, 'collection:', this.collection);
  //   toggle[0]
  //     ? (this.collection = this._FilterService.filteringPrice(
  //         0,
  //         19,
  //         this.collection,
  //         this.savedCollection
  //       ))
  //     : null;

  //   toggle[1]
  //     ? (this.collection.next = this._FilterService.filteringPrice(
  //         20,
  //         29,
  //         this.collection,
  //         this.savedCollection
  //       ))
  //     : null;
  //   toggle[2]
  //     ? (this.collection = this._FilterService.filteringPrice(
  //         30,
  //         39,
  //         this.collection,
  //         this.savedCollection
  //       ))
  //     : null;
  //   toggle[3]
  //     ? (this.collection = this._FilterService.filteringPrice(
  //         40,
  //         49,
  //         this.collection,
  //         this.savedCollection
  //       ))
  //     : null;
  //   return this.collection;
  // }

  removeCollection() {
    this.getCollection();
  }
}
