// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Imports
import { WinefinderComponent } from './winefinder.component';
import { WinefinderRoutingModule } from './winefinder.routing';

// WineOS Imports
import { WineFinderFormModule } from 'wineos-finderform';
import { SliderModule } from 'wineos-slider';
import { ContentModule } from 'wineos-content';
import { NavigationModule } from 'wineos-navigation';
import { FeaturedContentModule } from 'wineos-featured-content';
import {MetadataModule} from 'ng2-metadata';

@NgModule({
  declarations: [
    WinefinderComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    MetadataModule,
    FeaturedContentModule,
    NavigationModule,
    SliderModule,
    WineFinderFormModule,
    WinefinderRoutingModule,
    RouterModule
  ],
  exports: [
      WinefinderComponent,
  ]
})
export class WinefinderModule {}
