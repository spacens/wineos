import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurStoryComponent } from './our-story.component';
import {OurStoryRouting} from './our-story.routing';
import {LargeBannerModule} from '../includes/large-banner/large-banner.module';
import {StorySectionModule} from '../includes/story-section/story-section.module';
import {FeaturedContentModule} from 'wineos-featured-content';

@NgModule({
  imports: [
    CommonModule,
    OurStoryRouting,
    LargeBannerModule,
    StorySectionModule,
    FeaturedContentModule
  ],
  declarations: [OurStoryComponent]
})
export class OurStoryModule { }
