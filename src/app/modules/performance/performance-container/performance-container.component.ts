import { Component } from '@angular/core';
import Link from '../../shared/interfaces/Link';

@Component({
    selector: 'app-performance-container',
    templateUrl: './performance-container.component.html',
    standalone: false
})
export class PerformanceContainerComponent {
  links: Link[] = [
    {
      href: 'web-workers',
      name: 'Web Workers',
      child: true,
    },
  ];
}
