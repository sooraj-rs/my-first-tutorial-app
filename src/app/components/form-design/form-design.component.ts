import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css']
})
export class FormDesignComponent implements OnInit {

  formValues:any={
    name:"Frami-Tromp",
    description:"Reverse-Engineered Executive Collaboration",
    tagLine:"Productize Frictionless Supply-Chains",
    email:"tristian.schmitt@jones.info",
    phone:"4515-333-333"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
