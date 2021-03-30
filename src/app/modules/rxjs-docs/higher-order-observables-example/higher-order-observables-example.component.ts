import { Component, OnInit } from '@angular/core';
import { HigherOrderObservablesDemoName } from 'src/app/higher-order-observables-demo-name.enum';
import { HigherorderobservablesdemorepoService } from 'src/app/higherorderobservablesdemorepo.service';
import { CodeDemoOptions } from 'src/app/shared/interfaces/code-demo';

@Component({
  selector: 'app-higher-order-observables-example',
  templateUrl: './higher-order-observables-example.component.html',
  styleUrls: ['./higher-order-observables-example.component.scss']
})
export class HigherOrderObservablesExampleComponent implements OnInit {

  codeDemos: CodeDemoOptions[] = [
    {
      name: 'Generic Example',
      option: HigherOrderObservablesDemoName.GENERIC
    },
  ];

  constructor(
    public codeDemoRepo: HigherorderobservablesdemorepoService,
  ) { }

  ngOnInit(): void {
  }

}
