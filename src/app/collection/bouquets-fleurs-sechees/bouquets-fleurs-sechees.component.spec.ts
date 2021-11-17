import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetsFleursSecheesComponent } from './bouquets-fleurs-sechees.component';

describe('BouquetsFleursSecheesComponent', () => {
  let component: BouquetsFleursSecheesComponent;
  let fixture: ComponentFixture<BouquetsFleursSecheesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouquetsFleursSecheesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouquetsFleursSecheesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
