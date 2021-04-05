import { RxJSComponent } from '../rxjs-docs/rx-js/rx-js.component';
import { Routes } from '@angular/router';
import { RxJSIntroComponent } from '../rxjs-docs/rx-jsintro/rx-jsintro.component';
import { RxJSTermsAndSyntaxComponent } from '../rxjs-docs/rx-jsterms-and-syntax/rx-jsterms-and-syntax.component';
import { GoingReactiveComponent } from '../rxjs-docs/going-reactive/going-reactive.component';
import { DataRetrievalExampleComponent } from 'src/app/modules/rxjs-docs/data-retrieval-example/data-retrieval-example.component';
import { PhotoDetailComponent } from 'src/app/modules/rxjs-docs/photo-detail/photo-detail.component';
import { CombiningStreamsExampleComponent } from 'src/app/modules/rxjs-docs/combining-streams-example/combining-streams-example.component';
import { AddPhotoComponent } from 'src/app/modules/rxjs-docs/add-photo/add-photo.component';
import { HigherOrderObservablesExampleComponent } from 'src/app/modules/rxjs-docs/higher-order-observables-example/higher-order-observables-example.component';
import { DemoExamplesComponent } from 'src/app/modules/rxjs-docs/demo-examples/demo-examples.component';

export const rxJSRouteOutlet = 'rxjsOutlet';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'rxjs',
    component: RxJSComponent,
    children: [
      {
        path: '',
        component: RxJSIntroComponent,
        outlet: rxJSRouteOutlet,
      },
      {
        path: 'terms-and-syntax',
        component: RxJSTermsAndSyntaxComponent,
        outlet: rxJSRouteOutlet,
      },
      {
        path: 'demo',
        component: DemoExamplesComponent,
        outlet: rxJSRouteOutlet,
      },
    ],
  },
  {
    path: 'going-reactive',
    component: GoingReactiveComponent,
  },
  {
    path: 'going-reactive/data-retrieval-example',
    component: DataRetrievalExampleComponent,
  },
  {
    path: 'going-reactive/data-retrieval-example/photo/:photoId',
    component: PhotoDetailComponent,
  },
  {
    path: 'going-reactive/combining-stream',
    component: CombiningStreamsExampleComponent,
  },
  {
    path: 'going-reactive/higher-order-observables',
    component: HigherOrderObservablesExampleComponent,
  },
  {
    path: 'going-reactive/data-retrieval-example/add/photo',
    component: AddPhotoComponent,
  },
];

export default routes;
