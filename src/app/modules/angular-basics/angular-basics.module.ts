import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBasicsRoutingModule } from './angular-basics-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateElementsComponent } from './template-elements/template-elements.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { AppPlaceholderDirective } from './dynamic-components/app-placeholder.directive';
import { CommonModule as AppCommonModule } from '../common/common.module';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component';
import { DemoComponent } from './angular-elements/demo/demo.component';
@NgModule({
  declarations: [
    HomeComponent,
    TemplateElementsComponent,
    DynamicComponentsComponent,
    AppPlaceholderDirective,
    NgTemplateOutletComponent,
    AngularElementsComponent,
    DemoComponent
  ],
  imports: [CommonModule, AngularBasicsRoutingModule, SharedModule, AppCommonModule],
  exports: [DemoComponent]
})
export class AngularBasicsModule {}
