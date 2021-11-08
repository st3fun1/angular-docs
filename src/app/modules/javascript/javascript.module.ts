import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { EventLoopComponent } from './event-loop/event-loop.component';

@NgModule({
  declarations: [HomeComponent, EventLoopComponent],
  imports: [CommonModule, JavascriptRoutingModule, SharedModule]
})
export class JavascriptModule {}
