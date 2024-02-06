import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: Observable<number>;

  constructor() {
    this.counter = interval(1000).pipe(
      map((value: number) => value + 1)
    );
  }

  getCounterObservable(): Observable<number> {
    return this.counter;
  }
}
