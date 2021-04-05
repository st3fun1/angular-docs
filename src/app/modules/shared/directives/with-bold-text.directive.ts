import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[with-bold-text]'
})
export class WithBoldTextDirective {
  constructor(
    private element: ElementRef
  ) { 
    this.element.nativeElement.style.fontWeight = 'bolder';
  }

}
