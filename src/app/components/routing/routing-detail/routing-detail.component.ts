import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-detail',
  templateUrl: './routing-detail.component.html',
  styleUrls: ['./routing-detail.component.css']
})
export class RoutingDetailComponent implements OnInit {

  absoluteOrRelative: string = "";
  currentRoute: string = "";
  currentRouteParam: string = "";
  currentQueryParam: string = "";
  currentHashFragment: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    if (this.currentRoute === "/routing-detail") {
      this.absoluteOrRelative = "Absolute Path";
    }
    if (this.currentRoute === "/routing/routing-detail") {
      this.absoluteOrRelative = "Relative Path";
    }

    //For fetching Route params
    this.activatedRoute.params.subscribe((param: any) => {
      if (param && param.id) {
        this.currentRouteParam = param.id;
      }
    });

    //For fetching Query params
    this.activatedRoute.queryParams.subscribe((param: any) => {
      if (param) {
        let currentQueryParam = JSON.stringify(param);
        this.currentQueryParam = currentQueryParam && currentQueryParam != "{}" ? currentQueryParam : "";
      }
    });

    //For fetching Hash fragment
    this.activatedRoute.fragment.subscribe((param: any) => {
      if (param) {
        this.currentHashFragment = param;
      }
    })
  }

}
