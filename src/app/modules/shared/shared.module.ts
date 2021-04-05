import { NgModule } from '@angular/core';
import { ShowNextSiblingDirective } from './directives/show-next-sibling.directive';
import { WithBoldTextDirective } from './directives/with-bold-text.directive';

@NgModule({
  declarations: [ShowNextSiblingDirective, WithBoldTextDirective],
  imports: [],
  exports: [ShowNextSiblingDirective, WithBoldTextDirective],
})
export class SharedModule {}
