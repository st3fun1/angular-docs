import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-rx-jsterms-and-syntax',
  templateUrl: './rx-jsterms-and-syntax.component.html',
  styleUrls: ['./rx-jsterms-and-syntax.component.scss']
})
export class RxJSTermsAndSyntaxComponent implements OnInit {
  response: HighlightResult = {};
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


  code = ` 
    const observer = {
      next: apple => console.log(apple),
      error: err => console.log(err),
      complete: () => console.log("No more apples go home")
    }
  `;

  constructor() { }

  ngOnInit(): void {
  }

  setPanelState(index: number, isOpen: boolean): void {
    this.panelList[index].isOpen = isOpen;
  }

  onHighlight(e: HighlightResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

}
