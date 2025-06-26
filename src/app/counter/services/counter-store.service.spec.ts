import { TestBed } from '@angular/core/testing';

import { CounterStoreService } from './counter-store.service';

describe('CounterStoreService', () => {
  let service: CounterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
