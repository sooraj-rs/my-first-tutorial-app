import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesBuiltInComponent } from './directives-built-in/directives-built-in.component';
import { ComponentDataBindingComponent } from './component-data-binding/component-data-binding.component';
import { ServiceComponent } from './service/service.component';
import { RoutingComponent } from './routing/routing.component';
import { ObservableComponent } from './observable/observable.component';
import { StripeComponent } from './stripe/stripe.component';
import { AthDesignComponent } from './ath-design/ath-design.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ProgressArrowComponent } from './progress-arrow/progress-arrow.component';
import { FormDesignComponent } from './form-design/form-design.component';
import { ChartDesignsComponent } from './chart-designs/chart-designs.component';

const childRoutes: Routes = [
  {
    path: '', children: [
      { path: 'contents', component: ContentsComponent },
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'directives-built-in', component: DirectivesBuiltInComponent },
      { path: 'component-data-binding', component: ComponentDataBindingComponent },
      { path: 'services', component: ServiceComponent },
      { path: 'routing', component: RoutingComponent },
      { path: 'observable', component: ObservableComponent },
      { path: 'stripe', component: StripeComponent },
      { path: 'ath-design', component: AthDesignComponent },
      { path: 'image-upload', component: ImageUploadComponent },
      { path: 'progress-arrow', component: ProgressArrowComponent },
      { path: 'form-design', component: FormDesignComponent },
      { path: 'chart-designs', component: ChartDesignsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
