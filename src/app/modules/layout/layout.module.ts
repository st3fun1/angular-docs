import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppToolsComponent } from './app-tools/app-tools.component';
import { CommonModule as AppCommonModule } from '../common/common.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [FooterComponent, NavigationBarComponent, AppToolsComponent],
  imports: [MatListModule, CommonModule, RouterModule, AppCommonModule],
  exports: [FooterComponent, NavigationBarComponent, AppToolsComponent],
})
export class LayoutModule {}
