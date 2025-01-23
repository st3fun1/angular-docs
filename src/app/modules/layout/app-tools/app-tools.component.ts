import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-tools',
    templateUrl: './app-tools.component.html',
    styleUrls: ['./app-tools.component.scss'],
    standalone: false
})
export class AppToolsComponent implements OnInit {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {}
}
