import { TestBed } from '@angular/core/testing';

import { PotterService } from './potter.service';

describe('PotterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotterService = TestBed.get(PotterService);
    expect(service).toBeTruthy();
  });
});
