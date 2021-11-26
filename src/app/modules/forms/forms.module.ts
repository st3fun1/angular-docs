import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsRoutingModule } from './forms-routing.module';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsComponent } from './forms/forms.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateFormsComponent, ReactiveFormsComponent, FormsComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, FormsRoutingModule, MatButtonModule, RouterModule],
  exports: [FormsComponent, TemplateFormsComponent, ReactiveFormsComponent]
})
export class AppFormsModule {}
