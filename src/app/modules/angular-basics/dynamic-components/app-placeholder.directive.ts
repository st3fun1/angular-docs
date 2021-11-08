import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppPlaceholder]'
})
export class AppPlaceholderDirective {
  // represents a container where one or more views can be attached to a component
  constructor(public viewContainerRef: ViewContainerRef) {}
}
