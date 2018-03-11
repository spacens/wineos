import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorySectionComponent} from './story-section.component';
import { ListStoryComponent } from './list-story/list-story.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StorySectionComponent,
    ListStoryComponent
  ],
  exports: [
    StorySectionComponent,
    ListStoryComponent
  ]
})
export class StorySectionModule { }
