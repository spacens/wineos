// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Compontent Imports
import { WinesVarietalComponent } from './varietal.component';

// WineOS Imports
import { ProductVarietalModule } from 'wineos-productvarietal';
import { SliderModule } from 'wineos-slider';
import { ContentModule } from 'wineos-content';
import { NavigationModule } from 'wineos-navigation';

@NgModule({
  declarations: [
    WinesVarietalComponent
  ],
  exports: [
    WinesVarietalComponent
  ],
  imports: [
    CommonModule,
    ProductVarietalModule,
    SliderModule,
    ContentModule,
    NavigationModule
  ]
})
export class WinesVarietalModule {}
