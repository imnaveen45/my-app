import { TestBed } from '@angular/core/testing';

import { FlipkartstoreService } from './flipkartstore.service';

describe('FlipkartstoreService', () => {
  let service: FlipkartstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
