import { HomeComponent } from '../home/home/home.component';
import { RxJSComponent } from '../rxjs-docs/rx-js/rx-js.component';
import {  Routes } from '@angular/router';
import { RxJSIntroComponent } from '../rxjs-docs/rx-jsintro/rx-jsintro.component';
import { RxJSTermsAndSyntaxComponent } from '../rxjs-docs/rx-jsterms-and-syntax/rx-jsterms-and-syntax.component';
import { DemoComponent } from '../rxjs-docs/demo/demo.component';
import { GoingReactiveComponent } from '../rxjs-docs/going-reactive/going-reactive.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
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
      },
      {
          path: 'going-reactive',
          component: GoingReactiveComponent,
          outlet: 'rxjsOutlet'
      },
      {
          path: 'demo',
          component: DemoComponent,
          outlet: 'rxjsOutlet'
      }
  ]},
];

export default routes;
