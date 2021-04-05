import { Component, Input, OnInit } from '@angular/core';
import { Rxjscodeexample } from '../../shared/interfaces/rxjscodeexample.enum';

@Component({
  selector: 'app-rxjs-terms-and-syntax-content',
  templateUrl: './rxjs-terms-and-syntax-content.component.html',
  styleUrls: ['./rxjs-terms-and-syntax-content.component.scss'],
})
export class RxjsTermsAndSyntaxContentComponent implements OnInit {
  @Input() key?: Rxjscodeexample;
  keys = Rxjscodeexample;

  constructor() {}

  ngOnInit(): void {}
}
