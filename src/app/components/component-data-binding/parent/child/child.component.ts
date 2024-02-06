import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('personDetailsChild') personDetailsChild: { name: string, place: string, type: string }[] = [];

  @Output() resetFormEmitter = new EventEmitter<string>();

  personDetailsChild1:{ name: string, place: string, type: string }[]=[
    {name:"sooraj",place:"tvm", type:"teacher"},
    {name:"athira",place:"tvm", type:"student"}
  ];

  constructor(private commonService: CommonService) { 
    this.commonService.dataTransferSubject
    .subscribe((data:any)=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  resetForm() {
    this.resetFormEmitter.emit('RESET');
  }

}
