import { NgModule } from '@angular/core';
import { PerformanceContainerComponent } from './performance-container/performance-container.component';
import { PerformanceRoutingModule } from './performance.routing.module';
import { CommonModule as CustomCommonModule } from '../common/common.module';
import { WebWorkersComponent } from './web-workers/web-workers.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculationComponent } from './web-workers/calculation/calculation.component';

@NgModule({
  declarations: [
    PerformanceContainerComponent,
    WebWorkersComponent,
    CalculationComponent,
  ],
  imports: [
    PerformanceRoutingModule,
    CustomCommonModule,
    CommonModule,
    FormsModule,
  ],
})
export class PerformanceModule {}
