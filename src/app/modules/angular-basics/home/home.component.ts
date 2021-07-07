import { Component, OnInit } from '@angular/core';
import Link from '../../shared/interfaces/Link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links: Link[] = [
    {
      href: 'components',
      name: 'Components'
    },
    {
      href: 'directives',
      name: 'Directives'
    },
    {
      href: 'dependency-injection',
      name: 'Dependency Injection'
    },
    {
      href: 'change-detection',
      name: 'Change Detection'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
