import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeetSectionComponent} from './meet-section.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MeetShortComponent } from './meet-short/meet-short.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [MeetSectionComponent, MeetShortComponent],
  exports: [MeetSectionComponent, MeetShortComponent]
})
export class MeetSectionModule { }
