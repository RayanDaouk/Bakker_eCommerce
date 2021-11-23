import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../../services/datas.service';
import { FilterService } from '../../../services/filter.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-bouquets-fleurs-sechees',
  templateUrl: './bouquets-fleurs-sechees.component.html',
  styleUrls: ['./bouquets-fleurs-sechees.component.scss'],
})
export class BouquetsFleursSecheesComponent implements OnInit {
  datas$: Observable<Array<any>> = of([]);
  collection: any = [];
  savedCollection: any[] = [];

  constructor(
    public datasService: DatasService,
    private _FilterService: FilterService
  ) {}

  getCollection() {
    this.datas$ = this.datasService.getDatas$();
    this.datas$.subscribe((res: any) => {
      this.collection = res[1].collection;
      this.savedCollection = this.collection;
    });
  }

  ngOnInit(): void {
    this.getCollection();
  }

  getFilter(toggle: Array<boolean>) {
    console.log('toggle', toggle);
    toggle[0]
      ? (this.collection = this._FilterService.filteringPrice(
          0,
          19,
          this.collection,
          this.savedCollection
        ))
      : null;

    toggle[1]
      ? (this.collection = this._FilterService.filteringPrice(
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
  }

  removeCollection() {
    this.getCollection();
  }
}
