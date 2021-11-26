import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  showTemplateForm = false;
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.showTemplateForm = !this.showTemplateForm;
  }
}
