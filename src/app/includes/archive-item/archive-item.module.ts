import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveItemComponent } from './archive-item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ArchiveItemComponent],
  exports: [ArchiveItemComponent]
})
export class ArchiveItemModule { }
