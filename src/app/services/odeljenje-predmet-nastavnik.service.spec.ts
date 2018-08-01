import { TestBed, inject } from '@angular/core/testing';

import { OdeljenjePredmetNastavnikService } from './odeljenje-predmet-nastavnik.service';

describe('OdeljenjePredmetNastavnikService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdeljenjePredmetNastavnikService]
    });
  });

  it('should be created', inject([OdeljenjePredmetNastavnikService], (service: OdeljenjePredmetNastavnikService) => {
    expect(service).toBeTruthy();
  }));
});
