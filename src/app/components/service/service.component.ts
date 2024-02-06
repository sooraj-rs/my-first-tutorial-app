import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  producedCorps: string[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.producedCorps = this.commonService.getFarmProducedCorps();
  }

}
