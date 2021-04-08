import { NgModule } from '@angular/core';
import { ShowNextSiblingDirective } from './directives/show-next-sibling.directive';
import { WithBoldTextDirective } from './directives/with-bold-text.directive';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [ShowNextSiblingDirective, WithBoldTextDirective],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
  imports: [HighlightModule],
  exports: [ShowNextSiblingDirective, WithBoldTextDirective, HighlightModule],
})
export class SharedModule {}
