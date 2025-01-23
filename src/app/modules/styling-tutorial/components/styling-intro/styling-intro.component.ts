import { Component, OnInit } from '@angular/core';
import ROUTE_PATHS from '../../routePaths';

@Component({
    selector: 'app-styling-intro',
    templateUrl: './styling-intro.component.html',
    styleUrls: ['./styling-intro.component.scss'],
    standalone: false
})
export class StylingIntroComponent implements OnInit {
  routePaths = ROUTE_PATHS;
  constructor() {}

  ngOnInit(): void {}
}
