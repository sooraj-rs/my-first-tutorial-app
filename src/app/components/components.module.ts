import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './contents/contents.component';
import { DirectivesBuiltInComponent } from './directives-built-in/directives-built-in.component';
import { ComponentDataBindingComponent } from './component-data-binding/component-data-binding.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './component-data-binding/parent/parent.component';
import { ChildComponent } from './component-data-binding/parent/child/child.component';
import { RoutingComponent } from './routing/routing.component';
import { ServiceComponent } from './service/service.component';
import { FruitsComponent } from './service/fruits/fruits.component';
import { VegetablesComponent } from './service/vegetables/vegetables.component';
import { RoutingDetailComponent } from './routing/routing-detail/routing-detail.component';
import { ObservableComponent } from './observable/observable.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsRoutingModule } from './components.routing.module';
import { StripeComponent } from './stripe/stripe.component';
import { AthDesignComponent } from './ath-design/ath-design.component';
import { ButtonBarComponent } from '../common/button-bar/button-bar.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ProgressArrowComponent } from './progress-arrow/progress-arrow.component';
import { FormDesignComponent } from './form-design/form-design.component';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const materialsModules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ComponentsRoutingModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule
];

@NgModule({
  declarations: [
    ContentsComponent,
    DataBindingComponent,
    DirectivesBuiltInComponent,
    ComponentDataBindingComponent,
    ParentComponent,
    ChildComponent,
    RoutingComponent,
    ServiceComponent,
    FruitsComponent,
    VegetablesComponent,
    RoutingDetailComponent,
    ObservableComponent,
    StripeComponent,
    AthDesignComponent,
    ImageUploadComponent,
    ButtonBarComponent,
    ProgressArrowComponent,
    FormDesignComponent
  ],
  imports: [...materialsModules]
})
export class ComponentsModule { }
