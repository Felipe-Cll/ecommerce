import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvalidComponent } from './invalid.component';

@NgModule({
  declarations: [
    InvalidComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InvalidComponent
  ]
})
export class InvalidModule { }
