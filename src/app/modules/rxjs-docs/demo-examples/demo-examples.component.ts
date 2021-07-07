import { Component, OnInit } from '@angular/core';
import { RxJSCodeDemoRepoService } from '../../../services/rx-jscode-demo-repo.service';
import { CodeDemoOptions } from '../../shared/interfaces/code-demo';
import { CodeDemoName } from '../../shared/interfaces/code-demo-name.enum';
@Component({
  selector: 'app-demo-examples',
  templateUrl: './demo-examples.component.html',
  styleUrls: ['./demo-examples.component.scss']
})
export class DemoExamplesComponent implements OnInit {
  codeDemos: CodeDemoOptions[] = [
    {
      name: 'of Creation function',
      option: CodeDemoName.OF
    },
    {
      name: 'from Creation Function',
      option: CodeDemoName.FROM
    },
    {
      name: 'fromEvent Creation function',
      option: CodeDemoName.FROM_EVENT
    },
    {
      name: 'operators',
      option: CodeDemoName.OPERATORS
    }
  ];

  constructor(public codeDemoRepo: RxJSCodeDemoRepoService) {}

  ngOnInit(): void {}
}
