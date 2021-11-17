import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss'],
})
export class CardArticleComponent implements OnInit {
  @Input() public src?: string;
  @Input() public text?: string;
  @Input() public btnText: string = 'default';

  constructor() {}

  ngOnInit(): void {}
}
