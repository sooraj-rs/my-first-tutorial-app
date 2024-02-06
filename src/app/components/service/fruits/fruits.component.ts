import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruitName: string = "";

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  addFruit() {
    if (this.fruitName) {
      this.commonService.addCorps(this.fruitName);
      this.fruitName = "";
    }
  }

}
