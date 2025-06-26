import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CounterStoreService } from '../services/counter-store.service';

@Injectable({ providedIn: 'root' })
export class CounterTimerService {
  private stop$ = new Subject<void>();

  constructor(private store: CounterStoreService) {}

  start() {
    this.stop$.next(); // cancel previous
    this.store.setRunning(true);

    interval(1000)
      .pipe(takeUntil(this.stop$))
      .subscribe(() => {
        this.store.increment();
      });
  }

  stop() {
    this.stop$.next();
    this.store.setRunning(false);
  }

  reset() {
    this.stop();
    this.store.reset();
  }
}
