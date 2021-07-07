import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as CustomCommonModule } from '../common/common.module';
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
import { RxjsDocRoutingModule } from './rxjs-docs-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RxjsTermsAndSyntaxContentComponent } from './rxjs-terms-and-syntax-content/rxjs-terms-and-syntax-content.component';
import { DemoComponent } from './demo/demo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [RxjsDocRoutingModule, CustomCommonModule, ReactiveFormsModule, CommonModule, SharedModule],
  declarations: [
    AddPhotoComponent,
    CombiningStreamsExampleComponent,
    DataRetrievalExampleComponent,
    DemoExamplesComponent,
    GoingReactiveComponent,
    HigherOrderObservablesExampleComponent,
    PhotoDetailComponent,
    RxJSComponent,
    RxJSIntroComponent,
    RxJSTermsAndSyntaxComponent,
    RxjsTermsAndSyntaxContentComponent,
    DemoComponent,
    HigherOrderObservablesExampleComponent
  ],
  providers: []
})
export class RxjsDocModule {}
