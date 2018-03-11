import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import {RecipesRouting} from './recipes.routing';
import {LargeBannerModule} from '../includes/large-banner/large-banner.module';
import {SliderModule} from '../includes/slider/slider.module';
import { RecipiesCategoryComponent } from './recipies-category/recipies-category.component';
import { RecipiesDetailComponent } from './recipies-detail/recipies-detail.component';
import {RouterModule} from '@angular/router';
import {ArchiveHeaderModule} from '../includes/archive-header/archive-header.module';
import {ArchiveItemModule} from '../includes/archive-item/archive-item.module';

@NgModule({
  imports: [
    CommonModule,
    RecipesRouting,
    LargeBannerModule,
    SliderModule,
    RouterModule,
    ArchiveHeaderModule,
    ArchiveItemModule
  ],
  declarations: [RecipesComponent, RecipiesCategoryComponent, RecipiesDetailComponent]
})
export class RecipesModule { }
