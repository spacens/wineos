import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalComponent } from './international.component';
import {InternationalRouting} from './international.routing';

@NgModule({
  imports: [
    CommonModule,
    InternationalRouting
  ],
  declarations: [InternationalComponent]
})
export class InternationalModule { }
