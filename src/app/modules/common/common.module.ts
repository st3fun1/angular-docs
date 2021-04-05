import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { CommonModule as NgCommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgCommonModule,
  ],
  exports: [
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgCommonModule,
  ],
})
export class CommonModule {}
