import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsArticleComponent } from './add-details-article.component';

describe('AddDetailsArticleComponent', () => {
  let component: AddDetailsArticleComponent;
  let fixture: ComponentFixture<AddDetailsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
