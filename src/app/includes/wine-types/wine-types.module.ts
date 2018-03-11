import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WineTypesComponent} from './wine-types.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    WineTypesComponent
  ],
  exports: [
    WineTypesComponent
  ]
})
export class WineTypesModule { }
