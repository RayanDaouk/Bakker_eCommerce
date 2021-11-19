/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import gift from '../data/ideeCadeau.json';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  // constructor() {}
  giftList: any = [];

  ngOnInit(): void {
    this.giftList = gift;
    console.log('giftList:', this.giftList);
  }
}
