import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  counterValue: number;
  isCounterRunning: boolean = false;
  private counterSubscription: Subscription;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {}

  startCounter(): void {
    if (!this.isCounterRunning) {
      this.isCounterRunning = true;
      this.counterSubscription = this.counterService
        .getCounterObservable()
        .subscribe((value: number) => {
          this.counterValue = value;
        });
    }
    const timerPromise = new Promise((resolve,reject)=>{
      this.counterService.getCounterObservable()
      .subscribe((value:number)=>{
       resolve(value);
      })
    });
    alert("Hi 1");
    alert("Hi 2");
    timerPromise.then((v:any)=>{
      this.counterValue=v;
    })
  }
  stopCounter(): void {
    if (this.isCounterRunning) {
      this.isCounterRunning = false;
      this.counterSubscription.unsubscribe();
    }
  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

}
