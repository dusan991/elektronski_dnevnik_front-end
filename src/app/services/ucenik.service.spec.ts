import { TestBed, inject } from '@angular/core/testing';

import { UcenikService } from './ucenik.service';

describe('UcenikService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UcenikService]
    });
  });

  it('should be created', inject([UcenikService], (service: UcenikService) => {
    expect(service).toBeTruthy();
  }));
});
