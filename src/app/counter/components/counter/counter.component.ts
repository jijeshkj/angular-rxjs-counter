import { Component } from '@angular/core';
import { CounterStoreService } from '../../services/counter-store.service';
import { CounterTimerService } from '../../logic/counter-timer.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  value$ = this.store.value$;
  running$ = this.store.running$;

  constructor(
    private store: CounterStoreService,
    private timer: CounterTimerService
  ) {}

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  reset() {
    this.timer.reset();
  }
}
