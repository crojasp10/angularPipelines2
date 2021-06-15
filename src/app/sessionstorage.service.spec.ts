import { TestBed } from '@angular/core/testing';

import { SessionstorageService } from './Services/sessionstorage.service';

describe('SessionstorageService', () => {
  let service: SessionstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
