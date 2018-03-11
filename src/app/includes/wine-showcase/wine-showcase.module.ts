import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WineShowcaseComponent} from './wine-showcase.component';
import { WinesByTagsPipe } from './wines-by-tags.pipe';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    WineShowcaseComponent,
    WinesByTagsPipe
  ],
  exports : [WineShowcaseComponent]
})
export class WineShowcaseModule { }
