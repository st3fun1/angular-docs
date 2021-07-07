import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { CombiningStreamsExampleComponent } from './combining-streams-example/combining-streams-example.component';
import { DataRetrievalExampleComponent } from './data-retrieval-example/data-retrieval-example.component';
import { DemoExamplesComponent } from './demo-examples/demo-examples.component';
import { GoingReactiveComponent } from './going-reactive/going-reactive.component';
import { HigherOrderObservablesExampleComponent } from './higher-order-observables-example/higher-order-observables-example.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { RxJSComponent } from './rx-js/rx-js.component';
import { RxJSIntroComponent } from './rx-jsintro/rx-jsintro.component';
import { RxJSTermsAndSyntaxComponent } from './rx-jsterms-and-syntax/rx-jsterms-and-syntax.component';

export const rxJSRouteOutlet = 'rxjsOutlet';

const routes: Routes = [
  // workaroud: https://github.com/angular/angular/issues/10726
  {
    path: 'main',
    component: RxJSComponent,
    children: [
      {
        path: 'intro',
        component: RxJSIntroComponent,
        outlet: rxJSRouteOutlet
      },
      {
        path: 'terms-and-syntax',
        component: RxJSTermsAndSyntaxComponent,
        outlet: rxJSRouteOutlet
      },
      {
        path: 'demo',
        component: DemoExamplesComponent,
        outlet: rxJSRouteOutlet
      }
    ]
  },
  {
    path: 'going-reactive',
    component: GoingReactiveComponent
  },
  {
    path: 'going-reactive/data-retrieval-example',
    component: DataRetrievalExampleComponent
  },
  {
    path: 'going-reactive/data-retrieval-example/photo/:photoId',
    component: PhotoDetailComponent
  },
  {
    path: 'going-reactive/combining-stream',
    component: CombiningStreamsExampleComponent
  },
  {
    path: 'going-reactive/higher-order-observables',
    component: HigherOrderObservablesExampleComponent
  },
  {
    path: 'going-reactive/data-retrieval-example/add/photo',
    component: AddPhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsDocRoutingModule {}
