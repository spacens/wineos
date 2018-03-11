// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WhereToBuyComponent} from './where-to-buy.component';
import {BlogComponent} from '../blog/blog.component';

const winesRoutes: Routes = [
  {
    path: 'where-to-buy',
    data: {
      title: 'Where to buy',
      headerClass: '',
    },
    children: [
      {path: '', component: WhereToBuyComponent, pathMatch: 'full'},
      {path: ':address', component: WhereToBuyComponent},
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
export class WhereToBuyRouting { }
