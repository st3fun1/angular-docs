import { Component, OnInit } from '@angular/core';
import Link from '../../shared/interfaces/Link';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss']
})
export class RxJSComponent implements OnInit {
  links: Link[] = [
    {
      href: 'intro',
      name: 'Intro',
      child: true
    },
    {
      href: 'terms-and-syntax',
      name: 'Terms and Syntax',
      child: true
    },
    {
      href: 'demo',
      name: 'Demo',
      child: true
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
