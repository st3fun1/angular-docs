import { Component } from '@angular/core';
import { calculate } from './calculation';

declare global {
  interface ImportMeta {
    url: string;
  }
}

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
})
export class CalculationComponent {
  private currentWorker!: Worker;

  value!: number;
  isCalculating = false;
  result: string | null = null;
  message = '';
  runWithWebWorker = false;

  modelChange(newValue: number): void {
    const start = performance.now();
    this.message = '';
    this.value = newValue;
    this.result = null;

    console.log(this.runWithWebWorker);

    if (this.runWithWebWorker && typeof Worker !== undefined) {
      this.terminateRunningWorker();
      this.invokeNewWorker(newValue);
    } else {
      this.isCalculating = true;
      this.result = calculate(newValue);
      this.isCalculating = false;
    }
    this.message = `Blocked UI for ${performance.now() - start} ms`;
  }

  private invokeNewWorker(value: number): void {
    this.currentWorker = new Worker(
      new URL('./calculation.worker', import.meta.url)
    );
    this.isCalculating = true;
    this.currentWorker.onmessage = ({ data }) => {
      this.result = data.result;
      this.isCalculating = false;
    };
    this.currentWorker.postMessage({ value });
  }

  private terminateRunningWorker(): void {
    this.currentWorker?.terminate();
    this.isCalculating = false;
  }
}
