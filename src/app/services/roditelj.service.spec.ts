import { TestBed, inject } from '@angular/core/testing';

import { RoditeljService } from './roditelj.service';

describe('RoditeljService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoditeljService]
    });
  });

  it('should be created', inject([RoditeljService], (service: RoditeljService) => {
    expect(service).toBeTruthy();
  }));
});
