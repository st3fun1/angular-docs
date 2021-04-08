import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingIntroComponent } from './components/styling-intro/styling-intro.component';
import { WebComponentsComponent } from './components/web-components/web-components.component';
import { StylingTUtorialRouterModule } from './styling-tutorial-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewEncapsulationTutorialComponent } from './components/view-encapsulation-tutorial/view-encapsulation-tutorial.component';
import { EmulatedCssSelectorsComponent } from './components/emulated-css-selectors/emulated-css-selectors.component';
import { ScssArchitectureComponent } from './components/scss-architecture/scss-architecture.component';
@NgModule({
  declarations: [
    StylingIntroComponent,
    WebComponentsComponent,
    ViewEncapsulationTutorialComponent,
    EmulatedCssSelectorsComponent,
    ScssArchitectureComponent,
  ],
  imports: [CommonModule, StylingTUtorialRouterModule, SharedModule],
})
export class StylingTutorialModule {}
