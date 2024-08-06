import { TestBed } from '@angular/core/testing';

import { BuySellServiceService } from './buy-sell-service.service';

describe('BuySellServiceService', () => {
  let service: BuySellServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuySellServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
