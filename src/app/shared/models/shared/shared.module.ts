import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InvalidModule } from '../../components/invalid/invalid.module';
import { SearchBarModule } from './../../components/search-bar/search-bar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    InvalidModule,
    SearchBarModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    InvalidModule,
    SearchBarModule
  ]
})
export class SharedModule { }
