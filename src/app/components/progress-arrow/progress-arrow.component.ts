import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-arrow',
  templateUrl: './progress-arrow.component.html',
  styleUrls: ['./progress-arrow.component.css']
})
export class ProgressArrowComponent implements OnInit {

  progressItems: { name: string, isActive: boolean, isCompleted: boolean }[] = [
    { name: "Added", isActive: false, isCompleted: false },
    { name: "Submitted", isActive: false, isCompleted: false },
    { name: "Verified", isActive: false, isCompleted: false },
    { name: "Approved", isActive: false, isCompleted: false },
    { name: "Completed", isActive: false, isCompleted: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getClass(data: any) {
    if (data.isCompleted == true && data.isActive == true) {
      return 'completed current';
    }
    else if (data.isCompleted == true && data.isActive == false) {
      return 'completed';
    }
    else if (data.isCompleted == false && data.isActive == true) {
      return 'current';
    }
    else {
      return '';
    }
  }

  onClickArrow(data: any) {
    this.progressItems = this.progressItems.map(x => {
      if (x.name == data.name) {
        x.isActive = true;
      }
      else {
        x.isActive = false;
      }
      return x;
    })
  }

  isButtonActive(){
    let currentItem = this.progressItems.find(x=>x.isActive==true);
    return currentItem?true:false;
  }

  approveProgress(){
    this.progressItems = this.progressItems.map((x,i) => {
      let current = this.progressItems[i];
      let prev = this.progressItems[i-1];
      if (current?.isActive == true && (prev?.isCompleted ==true || i==0)) {
        x.isCompleted = true;
      }
      return x;
    })
  }

}
