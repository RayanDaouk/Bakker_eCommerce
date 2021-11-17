import { TestBed } from '@angular/core/testing';

import { AddInCartService } from './add-in-cart.service';

describe('AddInCartService', () => {
  let service: AddInCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddInCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
