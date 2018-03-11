import { Component, OnInit } from '@angular/core';
import {LargeBannerContent} from '../includes/large-banner/large-banner.component';
import {SliderItem} from '../includes/slider/slider.component';
import {RecipesService} from '../recipes.service';
declare var window: any;

export class CategoryWithSliderItems {
  category = '';
  items: SliderItem[];
}
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  topBanner: LargeBannerContent;
  categoriesWithItems: CategoryWithSliderItems[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {

    this.recipesService.getRecipesByCategory().
    map(recByCategory => {
      return recByCategory.map(catWithItems => {
        catWithItems.items =  catWithItems.items.map(recipe => (new SliderItem()).fillFromRecipe(recipe) );
        return catWithItems as CategoryWithSliderItems;
      });
    }).subscribe((recByCategory: CategoryWithSliderItems[]) => {
      this.categoriesWithItems = recByCategory;

      window.setTimeout(window.initSliderBlog, 1000);
    });
    this.topBanner = new LargeBannerContent(
      'Sweet Sunday',
      'Desc',
      '/assets/markup/images/visual02.jpg',
      'Make This Recipe',
      '/'
    );


    // move it to slider
  }

}
