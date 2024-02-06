import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'my-first-tutorial-app';

  componentDetails: { id: number, name: string, path: string }[] = [
    { id: 0, name: 'Contents', path: 'component/contents' },
    { id: 1, name: 'Databinding', path: 'component/data-binding' },
    { id: 2, name: 'Built-In Directives', path: 'component/directives-built-in' },
    { id: 3, name: 'Databinding Between Components', path: 'component/component-data-binding' },
    { id: 4, name: 'Services', path: 'component/services' },
    { id: 5, name: 'Routing', path: 'component/routing' },
    { id: 5, name: 'Observable', path: 'component/observable' },
    { id: 6, name: 'Stripe', path: 'component/stripe' },
    { id: 7, name: 'Ath Design', path: 'component/ath-design' },
    { id: 8, name: 'Image Upload', path: 'component/image-upload' },
    { id: 9, name: 'Progress Arrow', path: 'component/progress-arrow' },
    { id: 10, name: 'Form Design', path: 'component/form-design' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickComponentButton(component: any) {
    if (component.path) {
      this.router.navigate([component.path]);
    }
    else {
      this.router.navigate(['/']);

    }
  }

}
