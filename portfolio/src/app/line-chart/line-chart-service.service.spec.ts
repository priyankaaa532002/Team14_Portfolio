import { TestBed } from '@angular/core/testing';

import { LineChartServiceService } from './line-chart-service.service';

describe('LineChartServiceService', () => {
  let service: LineChartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineChartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
