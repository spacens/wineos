// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Imports
import { SubscribeComponent } from './subscribe.component';
import { SubscribeRoutingModule } from './subscribe.routing';

// WineOS Module
import { NewsletterModule } from 'wineos-newsletter';
import { SliderModule } from 'wineos-slider';
import { ContentModule } from 'wineos-content';
import { NavigationModule } from 'wineos-navigation';
import { FeaturedContentModule } from 'wineos-featured-content';


@NgModule({
  declarations: [
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    NavigationModule,
    SliderModule,
    NewsletterModule,
    FeaturedContentModule,
    SubscribeRoutingModule,
    RouterModule
  ],
  exports: [
      SubscribeComponent,
  ]
})

export class SubscribeModule {}
