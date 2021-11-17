import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() emitFilter: EventEmitter<Array<boolean>> = new EventEmitter();
  @Output() emitReset: EventEmitter<any> = new EventEmitter();
  isActivated: boolean[] = [false, false, false, false];

  constructor() {}

  ngOnInit(): void {}

  filtering(index: number) {
    this.isActivated = [false, false, false, false];

    if (!this.isActivated[index]) {
      this.isActivated[index] = true;
    } else {
      this.isActivated[index] = false;
    }
    this.emitFilter.emit(this.isActivated);
  }

  resetFilter() {
    this.isActivated = [false, false, false, false];
    this.emitReset.emit();
  }
}
