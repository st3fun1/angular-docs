import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-terms-and-syntax-content',
  templateUrl: './rxjs-terms-and-syntax-content.component.html',
  styleUrls: ['./rxjs-terms-and-syntax-content.component.scss']
})
export class RxjsTermsAndSyntaxContentComponent implements OnInit {

  @Input() index: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
