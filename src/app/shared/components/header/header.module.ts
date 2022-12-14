import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarModule } from './../search-bar/search-bar.module';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchBarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
