// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InternationalComponent} from './international.component';

const winesRoutes: Routes = [
  {
    path: 'international',
    component: InternationalComponent,
    data: {
      title: 'International',
      headerClass: 'alt bg-green',
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
export class InternationalRouting { }
