import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit {
  myContext = { $implicit: 'World', localSk: 'Svet' };
  constructor() {}

  ngOnInit(): void {}
}
