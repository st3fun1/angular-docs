import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[show-next-sibling]'
})
export class ShowNextSiblingDirective {
  _isActive = false;
  @HostListener('click', ['$event.target'])
  onClick(event: Event) {
    this._isActive = !this._isActive;
  }

  @HostBinding('class.isActive') get isActive() {
    return this._isActive;
  }

  constructor(
  ) { }

}
