import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ObservablesComponent } from './observables/observables.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { RxJSComponent } from './rx-js/rx-js.component';
import { HomeComponent } from './home/home.component';
import { RxJSIntroComponent } from './rx-jsintro/rx-jsintro.component';
import { RxJsHomeComponent } from './rx-js-home/rx-js-home.component';
import { RxJSTermsAndSyntaxComponent } from './rx-jsterms-and-syntax/rx-jsterms-and-syntax.component';
import { RxjsTermsAndSyntaxContentComponent } from './rxjs-terms-and-syntax-content/rxjs-terms-and-syntax-content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    DependencyInjectionComponent,
    RxJSComponent,
    HomeComponent,
    RxJSIntroComponent,
    RxJsHomeComponent,
    RxJSTermsAndSyntaxComponent,
    RxjsTermsAndSyntaxContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule, 
    BrowserAnimationsModule, 
    NoopAnimationsModule,
    MatExpansionModule, 
    MatDividerModule,
    HighlightModule
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
