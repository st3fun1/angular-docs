import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rx-jsterms-and-syntax',
  templateUrl: './rx-jsterms-and-syntax.component.html',
  styleUrls: ['./rx-jsterms-and-syntax.component.scss']
})
export class RxJSTermsAndSyntaxComponent implements OnInit {

  panelList = [
    {
      isOpen: true,
      title: 'Observer/Subscriber',
      description: ''
    },
    {
      isOpen: false,
      title: 'Syntax',
      description: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setPanelState(index: number, isOpen: boolean): void {
    this.panelList[index].isOpen = isOpen;
  }

}
