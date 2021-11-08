import { Component, OnInit } from '@angular/core';
import { HigherorderobservablesdemorepoService } from 'src/app/services/higherorderobservablesdemorepo.service';
import { CodeDemoOptions } from '../../shared/interfaces/code-demo';
import { HigherOrderObservablesDemoName } from '../../shared/interfaces/higher-order-observables-demo-name.enum';

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
    {
      name: '.concatMap Example',
      option: HigherOrderObservablesDemoName.CONCAT_MAP
    },
    {
      name: '.mergeMap Example',
      option: HigherOrderObservablesDemoName.MERGE_MAP
    },
    {
      name: '.switchMap Example',
      option: HigherOrderObservablesDemoName.SWITCH_MAP
    },
    {
      name: '.exhaustMap Example',
      option: HigherOrderObservablesDemoName.EXHAUST_MAP
    }
  ];

  constructor(public codeDemoRepo: HigherorderobservablesdemorepoService) {}

  ngOnInit(): void {}
}
