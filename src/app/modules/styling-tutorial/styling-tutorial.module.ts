import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingIntroComponent } from './components/styling-intro/styling-intro.component';
import { WebComponentsComponent } from './components/web-components/web-components.component';

@NgModule({
  declarations: [StylingIntroComponent, WebComponentsComponent],
  imports: [CommonModule],
})
export class StylingTutorialModule {}
