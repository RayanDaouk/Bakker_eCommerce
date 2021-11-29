import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../services/datas.service';
import { FilterService } from '../../services/filter.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  datas$: Observable<Array<any>> = of([]);
  collection: any = [];
  savedCollection: any[] = [];
  nameCollection: string | null = '';

  constructor(
    private datasService: DatasService,
    private _FilterService: FilterService,
    private route: ActivatedRoute
  ) {}

  getCollection(nameCollection: string | null) {
    this.nameCollection = nameCollection;
    console.log('getCollection');
    this.datas$ = this.datasService.getDatas$();
    this.datas$.subscribe((res: any) => {
      console.log('res:', res);
      res.map((item: any) => {
        if (item.name === nameCollection) {
          console.log("J'ai trouvé la collection!");
          this.collection = item.collection;
          this.savedCollection = this.collection;
          console.log('this.collection=', this.collection);
        }
      });
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log('params:', params.get('name'));
      this.getCollection(params.get('name'));
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
    this.getCollection(this.nameCollection);
  }
}
