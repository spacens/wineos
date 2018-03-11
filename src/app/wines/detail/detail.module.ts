// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Compontent Imports
import { WinesDetailComponent } from './detail.component';

// WineOS Imports
import { ProductDetailModule } from 'wineos-productdetail';
import { SliderModule } from 'wineos-slider';
import { ContentModule } from 'wineos-content';
import { SocialLinkModule } from 'wineos-social-link';
import { FeaturedContentModule } from 'wineos-featured-content';

@NgModule({
  declarations: [
    WinesDetailComponent
  ],
  exports: [
    WinesDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailModule,
    SliderModule,
    ContentModule,
    SocialLinkModule,
    FeaturedContentModule,
    RouterModule,
  ]
})

export class WinesDetailModule {}
