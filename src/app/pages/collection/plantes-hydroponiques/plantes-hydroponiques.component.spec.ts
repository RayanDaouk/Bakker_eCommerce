import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantesHydroponiquesComponent } from './plantes-hydroponiques.component';

describe('PlantesHydroponiquesComponent', () => {
  let component: PlantesHydroponiquesComponent;
  let fixture: ComponentFixture<PlantesHydroponiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantesHydroponiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantesHydroponiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
