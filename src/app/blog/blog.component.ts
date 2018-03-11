import { Component, OnInit } from '@angular/core';
import {SliderItem} from '../includes/slider/slider.component';
import {LargeBannerContent} from '../includes/large-banner/large-banner.component';
import {CategoryWithSliderItems} from '../recipes/recipes.component';
import {BlogService} from './blog.service';
declare var window: any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {
  topBanner: LargeBannerContent;
  categoriesWithItems: CategoryWithSliderItems[];
  constructor(private blogService: BlogService) { }

  ngOnInit() {

    this.blogService.getPostsByCategory()
      .map(recByCategory => {
        return recByCategory.map(catWithItems => {
          catWithItems.items =  catWithItems.items.map(post => (new SliderItem()).fillFromBlogPostRequest(post) );
          return catWithItems as CategoryWithSliderItems;
        });
      }).subscribe((recByCategory: CategoryWithSliderItems[]) => {
      this.categoriesWithItems = recByCategory;
      console.log(this.categoriesWithItems);

      window.setTimeout(window.initSliderBlog, 1000);
    });

    this.topBanner = new LargeBannerContent(
      'DIY BALLDROP',
      'Desc',
      '/assets/markup/images/visual01.jpg',
      'Read more',
      '/'
    );
  }

}
