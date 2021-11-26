import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { HomeComponent } from './home/home.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { TemplateElementsComponent } from './template-elements/template-elements.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'template-elements',
    component: TemplateElementsComponent
  },
  {
    path: 'dynamic-components',
    component: DynamicComponentsComponent
  },
  {
    path: 'ng-template-outlet',
    component: NgTemplateOutletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBasicsRoutingModule {}
