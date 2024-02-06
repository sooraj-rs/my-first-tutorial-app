import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoutingDetailComponent } from './components/routing/routing-detail/routing-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },

  {
    path: 'component',
    loadChildren: () => import('../app/components/components.module').then(m => m.ComponentsModule)
  },

  //For Absolute Path
  { path: 'routing-detail', component: RoutingDetailComponent },

  //For Relative Paths
  { path: 'routing/routing-detail', component: RoutingDetailComponent },

  //For Absolute Path With Route params
  { path: 'routing-detail/:id', component: RoutingDetailComponent },

  //For Relative Paths With Route params
  { path: 'routing/routing-detail/:id', component: RoutingDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
