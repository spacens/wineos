// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component Imports
import { HomepageComponent } from './homepage.component';

// WineOS Imports
import { SliderModule } from 'wineos-slider';
import { FeaturedContentModule } from 'wineos-featured-content';
import { LifeIsBetterComponent } from './life-is-better/life-is-better.component';
import { GoGoComponent } from './go-go/go-go.component';
import { WineSectionComponent } from './wine-section/wine-section.component';
import { MeetSectionComponent } from './meet-section/meet-section.component';
import {StorySectionModule} from '../includes/story-section/story-section.module';
import {TagListModule} from '../includes/tag-list/tag-list.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MeetSectionModule} from './meet-section/meet-section.module';

@NgModule({
  declarations: [
    HomepageComponent,
    LifeIsBetterComponent,
    GoGoComponent,
    WineSectionComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    FeaturedContentModule,
    StorySectionModule,
    TagListModule,
    RouterModule,
    FormsModule,
    MeetSectionModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {}
