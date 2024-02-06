import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  stringInterpolation: string = `{{data}}`;
  propertyBinding: string = `[property]="data"`;
  eventBinding: string = `(event)="expression"`;
  twoWayBinding: string = `[(ngModel)]="data"`;
  ngIfDirective: string = `*ngIf="boolean"`;
  ngForDirective: string = `*ngFor="let tempVariable of variableArray"`;
  ngSwitchDirective: string = `[ngSwitch]="value"    *ngSwitchCase="value"     *ngSwitchDefault`;
  ngStyleDirective: string = `[ngStyle]="{ cssPropertyName : value }"`;
  ngClassDirective: string = `[ngClass]={ condition ? 'className1': 'classname2'}`;
  atInputProperty: string = `@Input('childVariable') childVariable : dataType;`;
  atInputPropertyUse: string = `<app-child-component [childVariable]="parentVariable"></app-child-component>`;
  atOutputProperty: string = `@Output() eventEmitterName = new EventEmitter<dataType>();`;
  atOutputPropertyUse: string = `<app-child-component (eventEmitterName)="parentFunction()"></app-child-component>`;
  routingTablePath1: string = `{path:'path1', component: ComponentOne}`;
  routingTablePath2: string = `{path:'relativepath/path2', component: ComponentTwo}`;
  routingTablePath3: string = `{path:'path3/:param1/:param2', component: ComponentThree}`;
  routingTablePath4: string = `{path:'path4', component: ComponentFour}`;
  routingTablePath5: string = `{path:'path5', component: ComponentFive}`;


  constructor() { }

  ngOnInit(): void {
  }

}
