// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OurStoryComponent} from './our-story.component';

const winesRoutes: Routes = [
  {
    path: 'story',
    data: {
      title: 'Our story',
      headerClass: '',
    },
    component: OurStoryComponent,
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(winesRoutes)
  ],
  providers: [
  ]
})
export class OurStoryRouting { }
