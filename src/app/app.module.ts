import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './modules/layout/layout.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RxjsDocModule } from './modules/rxjs-docs/rxjs-docs.module';
import { PerformanceModule } from './modules/performance/performance.module';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [CommonModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        LayoutModule,
        RouterModule,
        SharedModule,
        RxjsDocModule,
        PerformanceModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
