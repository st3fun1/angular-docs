import { Component, Input, OnInit } from '@angular/core';
import Link from '../../interfaces/Link';

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrls: ['./navigation-page.component.scss']
})
export class NavigationPageComponent implements OnInit {
  @Input() title!: string;
  @Input() links: Link[] = [];
  constructor() {}

  ngOnInit(): void {}
}
