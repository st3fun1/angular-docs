import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { CodeDemoOptions } from '../../../shared/interfaces/code-demo';
import { LogServiceService } from '../../../services/log-service.service';
import { RxJSCodeDemoRepoService } from '../../../services/rx-jscode-demo-repo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input() codeDemos: CodeDemoOptions[] = [];
  @Input() runDemoCode: Function = () => {}; 

  logs: string[] = [];
  constructor(
    private logService: LogServiceService
  ) { }

  ngOnInit(): void {
    this.logService.logSubject$.subscribe( (data: string) => {
      this.logs = [...this.logs, data];
    })
  }

  onCodeDemoChange(demoOption: MatSelectChange): void {
    this.logs = [];
    this.runDemoCode(demoOption.value);
  }

  onOpenedChange(event: boolean) {
  }

}
