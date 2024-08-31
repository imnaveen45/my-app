import { TestBed } from '@angular/core/testing';

import { VechilesService } from './vechiles.service';

describe('VechilesService', () => {
  let service: VechilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
