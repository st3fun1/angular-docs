import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppToolsComponent } from './app-tools/app-tools.component';
import { CommonModule as AppCommonModule } from '../common/common.module';

@NgModule({
  declarations: [FooterComponent, NavigationBarComponent, AppToolsComponent],
  imports: [MatListModule, CommonModule, RouterModule, AppCommonModule],
  exports: [FooterComponent, NavigationBarComponent, AppToolsComponent]
})
export class LayoutModule {}
