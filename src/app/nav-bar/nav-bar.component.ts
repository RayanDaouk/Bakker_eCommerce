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
  nav1: any;
  menu1: any;
  nav2: any;
  menu2: any;
  giftList: any = [];

  ngOnInit(): void {
    this.giftList = gift;
    console.log('giftList:', this.giftList);
    // SPAWN MENU OF NAVIGATION
    // TARGET NAV
    this.nav1 = document.getElementById('nav_1');
    this.menu1 = document.getElementById('menu_1');

    this.nav2 = document.getElementById('nav_2');
    this.menu2 = document.getElementById('menu_2');
    // EVENT SPAWN
    this.nav1.addEventListener('mouseover', () => {
      this.menu1.style.display = 'block';
    });
    this.nav1.addEventListener('mouseout', () => {
      this.menu1.style.display = 'none';
    });
    this.menu1.addEventListener('mouseover', () => {
      this.menu1.style.display = 'block';
    });
    this.menu1.addEventListener('mouseout', () => {
      this.menu1.style.display = 'none';
    });

    this.nav2.addEventListener('mouseover', () => {
      this.menu2.style.display = 'flex';
    });
    this.nav2.addEventListener('mouseout', () => {
      this.menu2.style.display = 'none';
    });
    this.menu2.addEventListener('mouseover', () => {
      this.menu2.style.display = 'flex';
    });
    this.menu2.addEventListener('mouseout', () => {
      this.menu2.style.display = 'none';
    });
  }
}
