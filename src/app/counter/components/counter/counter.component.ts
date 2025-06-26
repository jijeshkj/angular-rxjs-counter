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
    private logic: CounterTimerService
  ) {}

  start() {
    this.logic.start();
  }

  stop() {
    this.logic.stop();
  }

  reset() {
    this.logic.reset();
  }
}
