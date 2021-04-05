import { Component, OnInit } from '@angular/core';
import Link from '../../shared/interfaces/Link';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  links: Link[] = [
    {
      href: '/home',
      name: 'Home',
    },
    {
      href: '/rxjs',
      name: 'RxJS Basics',
    },
    {
      href: '/going-reactive',
      name: 'Going Reactive',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
