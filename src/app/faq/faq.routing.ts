// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaqComponent} from './faq.component';

const winesRoutes: Routes = [
  {
    path: 'faq',
    component: FaqComponent,
    data: {
      title: 'faq',
      headerClass: 'alt bg-purple',
    },
  }
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
export class FaqRouting { }
