import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnArticleComponent } from './btn-article.component';

describe('BtnArticleComponent', () => {
  let component: BtnArticleComponent;
  let fixture: ComponentFixture<BtnArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
