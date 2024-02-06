import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  farmProducedCorps: string[] = ["Potato", "Orange", "Pumpkin", "Tomato", "Apple", "Cabbage", "Banana"];

  dataTransferSubject: Subject<any> =  new Subject();

  constructor() { }

  getFarmProducedCorps(): string[] {
    return this.farmProducedCorps;
  }

  addCorps(corpName: string) {
    this.farmProducedCorps.push(corpName);
  }
}
