import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  progressItems: { name: string, isActive: boolean, isSelected: boolean }[] = [
    { name: "Added", isActive: false, isSelected: false },
    { name: "Submitted", isActive: false, isSelected: false },
    { name: "Verified", isActive: false, isSelected: false },
    { name: "Approved", isActive: false, isSelected: false },
    { name: "Completed", isActive: false, isSelected: false }
  ];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(data: any) {
    if (data.isSelected == true && data.isActive == true) {
      return 'completed current';
    }
    else if (data.isSelected == true && data.isActive == false) {
      return 'completed';
    }
    else if (data.isSelected == false && data.isActive == true) {
      return 'current';
    }
    else {
      return '';
    }
  }

  onClickArrow(data: any) {
    let index = this.progressItems.findIndex(x => x.name ===data.name);
    this.progressItems = this.progressItems.map((x,i) => {
      x.isSelected=false;
      if(i<index){
        x.isActive=true;
      }
      else  if(i==index){
        x.isActive=true;
        x.isSelected=true;
      }
      else{
        x.isActive=false;
      }
      return x;
    })
  }

  isButtonActive(){
    let currentItem = this.progressItems.find(x=>x.isActive==true);
    return currentItem?true:false;
  }

  saveChange() {
    this.progressItems = this.progressItems.map((x, i) => {
      x.isSelected = false;
      return x;
    })
    console.log(this.progressItems)
  }


  scrollRight(): void {
    let right = document.getElementById('progressarrowcontent');
    if(right){
      right.scrollLeft += 100;
    }
  }

  scrollLeft(): void {
    let left = document.getElementById('progressarrowcontent');
    if(left){
      left.scrollLeft -= 100;
    }
  }
}
