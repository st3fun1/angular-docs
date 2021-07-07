import { NgModule } from '@angular/core';
import { ShowNextSiblingDirective } from './directives/show-next-sibling.directive';
import { WithBoldTextDirective } from './directives/with-bold-text.directive';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [MatListModule];

@NgModule({
  declarations: [ShowNextSiblingDirective, WithBoldTextDirective, NavigationPageComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    }
  ],
  imports: [CommonModule, HighlightModule, ...MATERIAL_MODULES, RouterModule],
  exports: [ShowNextSiblingDirective, WithBoldTextDirective, HighlightModule, NavigationPageComponent]
})
export class SharedModule {}
