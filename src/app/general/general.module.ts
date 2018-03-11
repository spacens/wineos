// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component Imports
import { GeneralComponent } from './general.component';

// WineOS Imports
import { FeaturedContentModule } from 'wineos-featured-content';
import { SliderModule } from 'wineos-slider';
import { ContentModule } from 'wineos-content';

@NgModule({
  declarations: [
    GeneralComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    ContentModule,
    FeaturedContentModule
  ],
  exports: [
    GeneralComponent
  ]
})
export class GeneralModule {}
