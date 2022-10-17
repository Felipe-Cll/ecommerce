import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    HomeDetailsComponent
  ]
})
export class HomeModule { }
