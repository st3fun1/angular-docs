import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { CodeDemoOptions } from '../code-demo';
import { CodeDemoName } from '../code-demo-name.enum';
import { LogServiceService } from '../log-service.service';
import { RxJSCodeDemoRepoService } from '../rx-jscode-demo-repo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  codeDemos: CodeDemoOptions[] = [
    {
      name: 'of Creation function',
      option: CodeDemoName.OF
    },
    {
      name: 'from Creation Function',
      option: CodeDemoName.FROM
    }
  ];
  logs: string[] = [];
  

  constructor(
    private codeDemoRepo: RxJSCodeDemoRepoService,
    private logService: LogServiceService
  ) { }

  ngOnInit(): void {
    this.logService.logSubject$.subscribe( (data: string) => {
      this.logs = [...this.logs, data];
    })
  }

  onCodeDemoChange(demoOption: MatSelectChange): void {
    this.logs = [];
    this.codeDemoRepo.runDemoCode(demoOption.value);
  }

  onOpenedChange(event: boolean) {
  }

}
