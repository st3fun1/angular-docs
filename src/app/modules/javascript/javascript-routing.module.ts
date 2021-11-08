import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventLoopComponent } from './event-loop/event-loop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'event-loop',
    component: EventLoopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule {}
