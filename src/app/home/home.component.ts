import { Component, OnInit } from '@angular/core';
import section2Data from '../data/section2Data.json';
import section3Data from '../data/section3Data.json';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataList: any = [];
  dataList2: any = [];
  constructor() {}

  ngOnInit(): void {
    this.dataList = section2Data;
    this.dataList2 = section3Data;
  }
}
