import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagListComponent} from './tag-list.component';
import { TagsPipe } from './tags.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TagListComponent, TagsPipe],
  exports: [TagListComponent]
})
export class TagListModule { }
