import { TestBed } from '@angular/core/testing';

import { MReportIncomService } from './m-report-incom.service';

describe('MReportIncomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MReportIncomService = TestBed.get(MReportIncomService);
    expect(service).toBeTruthy();
  });
});
