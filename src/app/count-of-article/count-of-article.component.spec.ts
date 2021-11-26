import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountOfArticleComponent } from './count-of-article.component';

describe('CountOfArticleComponent', () => {
  let component: CountOfArticleComponent;
  let fixture: ComponentFixture<CountOfArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountOfArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountOfArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
