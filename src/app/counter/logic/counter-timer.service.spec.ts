import { TestBed } from '@angular/core/testing';

import { CounterTimerService } from './counter-timer.service';

describe('CounterTimerService', () => {
  let service: CounterTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
