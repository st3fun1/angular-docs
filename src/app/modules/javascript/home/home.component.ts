import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links = [
    {
      href: 'scope',
      name: 'Scope'
    },
    {
      href: 'event-loop',
      name: 'Event Loop'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
