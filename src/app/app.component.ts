import { Component } from '@angular/core';
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
      href: '/rxjs',
      name: 'RxJS Basics'
    },
    {
      href: '/going-reactive',
      name: 'Going Reactive'
    }
  ]
}
