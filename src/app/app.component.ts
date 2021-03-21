import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Link from './interfaces/Link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Link[] = [
    {
      href: '/home',
      name: 'Home'
    },
    {
      href: '/observables',
      name: 'Observables'
    },
    {
      href: '/dependency-injection',
      name: 'Dependency Injection'
    },
    {
      href: '/rxjs',
      name: 'RxJS'
    },
  ]

  prepareRoute(outlet: RouterOutlet) {
    return false;
  }
}
