import { TestBed } from '@angular/core/testing';

import { ColorTCXService } from './color-tcx.service';

describe('ColorTCXService', () => {
  let service: ColorTCXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorTCXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
