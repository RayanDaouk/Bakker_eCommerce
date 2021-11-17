import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn-article',
  templateUrl: './btn-article.component.html',
  styleUrls: ['./btn-article.component.scss'],
})
export class BtnArticleComponent implements OnInit {
  @Input() public text?: string;

  constructor() {}

  ngOnInit(): void {}
}
