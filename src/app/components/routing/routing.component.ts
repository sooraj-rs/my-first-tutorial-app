import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {


  fragmentValue: string = "";
  queryParamName: string = "";
  queryParamValue: string = "";
  routeParamValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getQueryParamRouterLink(type: string) {
    let path = "/routing-detail";
    let queryParamPath = "";
    if (this.queryParamName && this.queryParamValue && type === 'param') {
      queryParamPath = `{"` + this.queryParamName.toString() + `":"` + this.queryParamValue.toString() + `"}`;
      return queryParamPath ? JSON.parse(queryParamPath) : "";
    }
    if (type == 'url') {
      return path;
    }
  }

}
