import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArchiveHeaderComponent} from './archive-header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ArchiveHeaderComponent
  ],
  exports: [ArchiveHeaderComponent]
})
export class ArchiveHeaderModule { }
