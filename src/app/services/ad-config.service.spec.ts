import { TestBed } from '@angular/core/testing';

import { AdConfigService } from './ad-config.service';

describe('AdConfigService', () => {
  let service: AdConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
