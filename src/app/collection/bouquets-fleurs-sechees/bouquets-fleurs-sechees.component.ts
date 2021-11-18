import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../services/datas.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-bouquets-fleurs-sechees',
  templateUrl: './bouquets-fleurs-sechees.component.html',
  styleUrls: ['./bouquets-fleurs-sechees.component.scss'],
})
export class BouquetsFleursSecheesComponent implements OnInit {
  collection: any = [];
  savedCollection: any[] = [];

  constructor(
    public _DatasService: DatasService,
    private _FilterService: FilterService
  ) {
    this.savedCollection = this._DatasService.getCollection2();
  }

  getCollection() {
    this.collection = this._DatasService.getCollection2();
    console.log('collection1:', this.collection);
  }

  ngOnInit(): void {
    this.getCollection();
    console.log('Voici la collection:', this.collection);
  }

  getFilter(toggle: Array<boolean>) {
    this.getCollection();
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