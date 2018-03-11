import {Component, OnInit} from '@angular/core';
import {Recipe, RecipesService} from '../../recipes.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {SliderItem} from '../../includes/slider/slider.component';
declare var window: any;

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.scss'],
  providers: [RecipesService]
})
export class RecipiesDetailComponent implements OnInit {
  recipe: Recipe;
  slides: SliderItem[] = [];

  constructor(private recipiesService: RecipesService, private route: ActivatedRoute) {
    this.recipe = new Recipe();
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap(params => {
        return forkJoin(
          this.recipiesService.getRecipeById(params['id']),
          this.recipiesService.getRecipesFromCategory(params['category'])
        );
      })
    ).subscribe(data => {
      this.recipe = data[0];
      this.slides = data[1].map(item => (new SliderItem()).fillFromRecipe(item));
      console.log(this.slides);

      window.setTimeout(window.initSliderBlog, 1000); // move to slider component
    });
  }

}
