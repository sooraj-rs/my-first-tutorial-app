import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  stringInterpolationVariable: string = "This text is passed from typescript";
  twoWayBindingvariable: string = "Try editing the text";

  propertyBindVariable: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onEventButtonClick(text: string) {
    alert(text);
  }

}
