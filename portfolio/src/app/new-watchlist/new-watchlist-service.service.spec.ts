import { TestBed } from '@angular/core/testing';

import { NewWatchlistServiceService } from './new-watchlist-service.service';

describe('NewWatchlistServiceService', () => {
  let service: NewWatchlistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewWatchlistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
