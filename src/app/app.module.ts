import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { RxJSComponent } from './modules/rxjs-docs/rx-js/rx-js.component';
import { HomeComponent } from './modules/home/home/home.component';
import { RxJSIntroComponent } from './modules/rxjs-docs/rx-jsintro/rx-jsintro.component';
import { RxJSTermsAndSyntaxComponent } from './modules/rxjs-docs/rx-jsterms-and-syntax/rx-jsterms-and-syntax.component';
import { RxjsTermsAndSyntaxContentComponent } from './modules/rxjs-docs/rxjs-terms-and-syntax-content/rxjs-terms-and-syntax-content.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { DemoComponent } from './modules/rxjs-docs/demo/demo.component';
import { CommonModule } from '@angular/common';
import { GoingReactiveComponent } from './modules/rxjs-docs/going-reactive/going-reactive.component';
import { NavigationComponent } from './modules/layout/navigation/navigation.component';
import { DataRetrievalExampleComponent } from './data-retrieval-example/data-retrieval-example.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { WithBoldTextDirective } from './with-bold-text.directive';
import { ShowNextSiblingDirective } from './show-next-sibling.directive';
import { CombiningStreamsExampleComponent } from './combining-streams-example/combining-streams-example.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    RxJSComponent,
    HomeComponent,
    RxJSIntroComponent,
    RxJSTermsAndSyntaxComponent,
    RxjsTermsAndSyntaxContentComponent,
    FooterComponent,
    DemoComponent,
    GoingReactiveComponent,
    NavigationComponent,
    DataRetrievalExampleComponent,
    PhotoDetailComponent,
    WithBoldTextDirective,
    ShowNextSiblingDirective,
    CombiningStreamsExampleComponent,
    AddPhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule, 
    BrowserAnimationsModule, 
    NoopAnimationsModule,
    MatExpansionModule, 
    MatDividerModule,
    MatSelectModule,
    HighlightModule,
    CommonModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
