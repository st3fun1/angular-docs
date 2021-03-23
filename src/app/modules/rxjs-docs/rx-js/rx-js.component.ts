import { Component, OnInit } from '@angular/core';
import Link from '../../../interfaces/Link';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss']
})
export class RxJSComponent implements OnInit {

  links: Link[] = [
    {
      href: 'terms-and-syntax',
      name: 'Terms and Syntax',
      child: true
    },
    {
      href: 'going-reactive',
      name: 'Going Reactive',
      child: true
    },
    {
      href: 'demo',
      name: 'Demo',
      child: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
