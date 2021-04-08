import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emulated-css-selectors',
  templateUrl: './emulated-css-selectors.component.html',
  styleUrls: ['./emulated-css-selectors.component.scss'],
})
export class EmulatedCssSelectorsComponent implements OnInit {
  code = {
    HOST_CONTEXT: `
      :host-context(.container) {
        background: #2A9FBC
      }
    `,
    NG_DEEP: `
      :host u::ng-deep a:hover {
        text-decoration: underline;
      }
    `,
  };
  constructor() {}

  ngOnInit(): void {}
}
