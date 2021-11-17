import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInCartComponent } from './article-in-cart.component';

describe('ArticleInCartComponent', () => {
  let component: ArticleInCartComponent;
  let fixture: ComponentFixture<ArticleInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleInCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
