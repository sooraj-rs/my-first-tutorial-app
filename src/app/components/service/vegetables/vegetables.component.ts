import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  vegetableName: string = "";

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  addVegetable() {
    if (this.vegetableName) {
      this.commonService.addCorps(this.vegetableName);
      this.vegetableName = "";
    }
  }

}
