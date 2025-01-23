import { Component, Input, OnInit } from '@angular/core';
import { LogServiceService } from '../../../services/log-service.service';
import { CodeDemoOptions } from '../../shared/interfaces/code-demo';
import { MatSelectChange } from '@angular/material/select';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
    standalone: false
})
export class DemoComponent implements OnInit {
  @Input() codeDemos: CodeDemoOptions[] = [];
  @Input() runDemoCode: Function = () => {};

  logs: string[] = [];
  constructor(private logService: LogServiceService) {}

  ngOnInit(): void {
    this.logService.logSubject$.subscribe((data: string) => {
      this.logs = [...this.logs, data];
    });
  }

  onCodeDemoChange(demoOption: MatSelectChange): void {
    this.logs = [];
    this.runDemoCode(demoOption.value);
  }

  onOpenedChange(event: boolean) {}
}
