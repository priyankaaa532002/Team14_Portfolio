import { TestBed } from '@angular/core/testing';

import { NetworthServiceService } from './networth-service.service';

describe('NetworthServiceService', () => {
  let service: NetworthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
