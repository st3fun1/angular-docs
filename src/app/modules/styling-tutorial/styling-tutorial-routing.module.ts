import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmulatedCssSelectorsComponent } from './components/emulated-css-selectors/emulated-css-selectors.component';
import { StylingIntroComponent } from './components/styling-intro/styling-intro.component';
import { ViewEncapsulationTutorialComponent } from './components/view-encapsulation-tutorial/view-encapsulation-tutorial.component';
import { WebComponentsComponent } from './components/web-components/web-components.component';
import ROUTE_PATHS from './routePaths';

const routes: Routes = [
  {
    path: ROUTE_PATHS.STYLING_INTRO,
    component: StylingIntroComponent,
  },
  {
    path: ROUTE_PATHS.WEB_COMPONENTS,
    component: WebComponentsComponent,
  },
  {
    path: ROUTE_PATHS.VIEW_ENCAPSULATION,
    component: ViewEncapsulationTutorialComponent,
  },
  {
    path: ROUTE_PATHS.EMULATED_CSS_SELECTORS,
    component: EmulatedCssSelectorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylingTUtorialRouterModule {}
