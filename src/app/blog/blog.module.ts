import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import {BlogRouting} from './blog.routing';
import {FeaturedContentModule} from 'wineos-featured-content';
import {SliderModule} from '../includes/slider/slider.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import {ArchiveItemModule} from '../includes/archive-item/archive-item.module';
import {ArchiveHeaderModule} from '../includes/archive-header/archive-header.module';
import {LargeBannerModule} from '../includes/large-banner/large-banner.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRouting,
    FeaturedContentModule,
    SliderModule,
    ArchiveItemModule,
    ArchiveHeaderModule,
    LargeBannerModule
  ],
  declarations: [BlogComponent, BlogDetailComponent, BlogCategoryComponent]
})
export class BlogModule { }
