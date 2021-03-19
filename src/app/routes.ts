import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { HomeComponent } from './home/home.component';
import { ObservablesComponent } from './observables/observables.component';
import { RxJSComponent } from './rx-js/rx-js.component';
import {  Routes } from '@angular/router';
import { RxJSIntroComponent } from './rx-jsintro/rx-jsintro.component';
import { RxJsHomeComponent } from './rx-js-home/rx-js-home.component';
import { RxJSTermsAndSyntaxComponent } from './rx-jsterms-and-syntax/rx-jsterms-and-syntax.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'observables', component: ObservablesComponent, data: {animation: 'ObservablesPage'}},
  { path: 'dependency-injection', component: DependencyInjectionComponent},
  { path: 'rxjs', component: RxJSComponent, children: [
      {
          path: '',
          component: RxJSIntroComponent,
          outlet: 'rxjsOutlet'
      },
      {
          path: 'terms-and-syntax',
          component: RxJSTermsAndSyntaxComponent,
          outlet: 'rxjsOutlet'
      }
  ]},
];

export default routes;
