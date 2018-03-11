// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {BlogComponent} from '../blog/blog.component';
import {RecipiesCategoryComponent} from './recipies-category/recipies-category.component';
import {RecipiesDetailComponent} from './recipies-detail/recipies-detail.component';

const winesRoutes: Routes = [

  {
    path: 'recipes',
    data: {
      title: 'Recipes'
    },
    children: [
      { path: '', component: RecipesComponent, pathMatch: 'full' },
       { path: ':category', component: RecipiesCategoryComponent },
      { path: ':category/:id', component: RecipiesDetailComponent }
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
export class RecipesRouting { }
