import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavigationBarComponent],
  imports: [MatListModule, CommonModule, RouterModule],
  exports: [FooterComponent, NavigationBarComponent],
})
export class LayoutModule {}
