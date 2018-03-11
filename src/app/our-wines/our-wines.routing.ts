// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OurWinesComponent} from './our-wines.component';
import {WineDetailComponent} from './wine-detail/wine-detail.component';

const winesRoutes: Routes = [
  {
    path: 'our-wine',
    data: {
      title: 'Wines Catalog',
      headerClass: 'alt',
    },
    children: [
      { path: '', component: OurWinesComponent, pathMatch: 'full' },
      { path: ':sort', component: OurWinesComponent },
      { path: 'detail/:id', component: WineDetailComponent, data: {headerClass: ''}  },
    ]
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
export class OurWinesRouting { }
