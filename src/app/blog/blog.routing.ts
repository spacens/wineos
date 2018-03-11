// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from './blog.component';
import {BlogCategoryComponent} from './blog-category/blog-category.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';

const winesRoutes: Routes = [
  {
    path: 'blog',
    data: {
      title: 'Blog'
    },
    children: [
      { path: '', component: BlogComponent, pathMatch: 'full' },
      { path: ':category', component: BlogCategoryComponent },
      { path: ':category/:id', component: BlogDetailComponent }
    ]
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
export class BlogRouting { }
