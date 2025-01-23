import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[with-bold-text]',
    standalone: false
})
export class WithBoldTextDirective {
  constructor(
    private element: ElementRef
  ) { 
    this.element.nativeElement.style.fontWeight = 'bolder';
  }

}
