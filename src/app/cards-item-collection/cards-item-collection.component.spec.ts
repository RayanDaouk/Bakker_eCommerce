import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsItemCollectionComponent } from './cards-item-collection.component';

describe('CardsItemCollectionComponent', () => {
  let component: CardsItemCollectionComponent;
  let fixture: ComponentFixture<CardsItemCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsItemCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsItemCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
