import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerformanceContainerComponent } from './performance-container/performance-container.component';
import { WebWorkersComponent } from './web-workers/web-workers.component';

const routes = [
  {
    path: '',
    component: PerformanceContainerComponent,
  },
  {
    path: 'web-workers',
    component: WebWorkersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceRoutingModule {}
