import { TestBed, inject } from '@angular/core/testing';

import { NastavnikService } from './nastavnik.service';

describe('NastavnikService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NastavnikService]
    });
  });

  it('should be created', inject([NastavnikService], (service: NastavnikService) => {
    expect(service).toBeTruthy();
  }));
});
