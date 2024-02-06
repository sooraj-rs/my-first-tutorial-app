import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-built-in',
  templateUrl: './directives-built-in.component.html',
  styleUrls: ['./directives-built-in.component.css']
})
export class DirectivesBuiltInComponent implements OnInit {

  favouriteFontColor: string = "Green";

  favouriteNumber: number = 4;

  isPragraphShown: boolean = false;
  isFirstCssClass: boolean = true;

  fruitNames: string[] = ["Kivi", "Peach", "Pear", "Strawberry", "Cherry", "Apricot", "Lychee"];

  constructor() { }

  ngOnInit(): void {
  }

}
