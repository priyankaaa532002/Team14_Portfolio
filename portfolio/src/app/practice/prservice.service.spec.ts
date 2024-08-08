import { TestBed } from '@angular/core/testing';

import { PrserviceService } from './prservice.service';

describe('PrserviceService', () => {
  let service: PrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
