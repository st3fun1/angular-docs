import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { RxJSComponent } from './modules/rxjs-docs/rx-js/rx-js.component';
import { RxJSIntroComponent } from './modules/rxjs-docs/rx-jsintro/rx-jsintro.component';
import { RxJSTermsAndSyntaxComponent } from './modules/rxjs-docs/rx-jsterms-and-syntax/rx-jsterms-and-syntax.component';
import { RxjsTermsAndSyntaxContentComponent } from './modules/rxjs-docs/rxjs-terms-and-syntax-content/rxjs-terms-and-syntax-content.component';
import { DemoComponent } from './modules/rxjs-docs/demo/demo.component';

import { GoingReactiveComponent } from './modules/rxjs-docs/going-reactive/going-reactive.component';
import { DataRetrievalExampleComponent } from './modules/rxjs-docs/data-retrieval-example/data-retrieval-example.component';
import { PhotoDetailComponent } from './modules/rxjs-docs/photo-detail/photo-detail.component';
import { CombiningStreamsExampleComponent } from './modules/rxjs-docs/combining-streams-example/combining-streams-example.component';
import { AddPhotoComponent } from './modules/rxjs-docs/add-photo/add-photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HigherOrderObservablesExampleComponent } from './modules/rxjs-docs/higher-order-observables-example/higher-order-observables-example.component';
import { DemoExamplesComponent } from './modules/rxjs-docs/demo-examples/demo-examples.component';
import { LayoutModule } from './modules/layout/layout.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from './modules/common/common.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    RxJSComponent,
    RxJSIntroComponent,
    RxJSTermsAndSyntaxComponent,
    RxjsTermsAndSyntaxContentComponent,
    DemoComponent,
    GoingReactiveComponent,
    DataRetrievalExampleComponent,
    PhotoDetailComponent,
    CombiningStreamsExampleComponent,
    AddPhotoComponent,
    HigherOrderObservablesExampleComponent,
    DemoExamplesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    ReactiveFormsModule,
    LayoutModule,
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
