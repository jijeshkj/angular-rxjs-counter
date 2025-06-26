import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CounterState } from '../models/counter-state.model';

@Injectable({ providedIn: 'root' })
export class CounterStoreService {
  private readonly initialState: CounterState = { value: 0, running: false };
  private readonly state$ = new BehaviorSubject<CounterState>(this.initialState);

  readonly value$ = this.state$.asObservable().pipe(map(state => state.value));
  readonly running$ = this.state$.asObservable().pipe(map(state => state.running));

  setRunning(running: boolean) {
    this.updateState({ running });
  }

  increment() {
    const current = this.state$.value;
    this.updateState({ value: current.value + 1 });
  }

  reset() {
    this.state$.next(this.initialState);
  }

  private updateState(patch: Partial<CounterState>) {
    this.state$.next({ ...this.state$.value, ...patch });
  }
}
