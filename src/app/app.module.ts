import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RxjsDocModule } from './modules/rxjs-docs/rxjs-docs.module';
import { FormsRoutingModule } from './modules/forms/forms-routing.module';
import { createCustomElement } from '@angular/elements';
import { DemoComponent } from './modules/rxjs-docs/demo/demo.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    SharedModule,
    RxjsDocModule
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const custom = createCustomElement(DemoComponent, { injector: this.injector });
    customElements.define('app-hello-world', custom);
  }
}
