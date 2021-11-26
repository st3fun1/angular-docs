import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-elements',
  templateUrl: './angular-elements.component.html',
  styleUrls: ['./angular-elements.component.scss']
})
export class AngularElementsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showMessage() {
    const hello = document.getElementById('hello');
    if (hello) {
      hello.innerHTML = '<app-hello-world></app-hello-world>';
    }
  }
}
