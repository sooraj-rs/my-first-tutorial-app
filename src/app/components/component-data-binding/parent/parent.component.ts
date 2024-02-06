import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  personDetails: { name: string, place: string, type: string }[] = [];
  personName: string = '';
  personPlace: string = '';
  

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  addAsTeacher() {
    if (this.personName && this.personPlace) {
      let teacher = { name: this.personName, place: this.personPlace, type: 'Teacher' };
      this.personDetails.push(teacher);
    }

    this.commonService.dataTransferSubject.next(this.personDetails);

  }

  addAsStudent() {
    if (this.personName && this.personPlace) {
      let student = { name: this.personName, place: this.personPlace, type: 'Student' };
      this.personDetails.push(student);
    }
  }

  abc(event: any) {
    console.log(event);
    this.personName = "";
    this.personPlace = "";
  }

}
