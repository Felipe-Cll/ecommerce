import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../../components/header/header.module';
import { HomeModule } from 'src/app/pages/home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    HomeModule,
    HeaderModule
  ]
})
export class SharedModule { }
