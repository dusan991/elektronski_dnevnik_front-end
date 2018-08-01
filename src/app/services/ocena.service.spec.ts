import { TestBed, inject } from '@angular/core/testing';

import { OcenaService } from './ocena.service';

describe('OcenaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcenaService]
    });
  });

  it('should be created', inject([OcenaService], (service: OcenaService) => {
    expect(service).toBeTruthy();
  }));
});
