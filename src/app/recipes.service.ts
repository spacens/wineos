import {Injectable} from '@angular/core';
import {ContentService} from './content.service';
import {Observable} from 'rxjs/Observable';
import {pipe} from 'rxjs/Rx';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {mergeMap} from 'rxjs/operator/mergeMap';

export class Recipe {
  title = '';
  description = '';
  ingredients = '';
  direction = '';
  category = '';
  image = '';

  fillFromApiRequest(item: any): Recipe {
    this.title = item.field_recipe_title;
    this.description = item.field_recipe_description;
    this.image = item.field_recipe_images;
    this.ingredients = item.field_recipe_ingredients_list;
    this.direction = item.field_recipe_method_of_cooking;
    this.category = item.field_recipe_varietal_tag;
    return this;
  }

}

@Injectable()
export class RecipesService {

  constructor(private contentService: ContentService) {
  }

  getCategoryList(): Observable<string[]> {
    return this.contentService.getPage('recipe-varietal').map(categories => {
      return categories.map(cat => cat.name);
    });
  }

  getRecipesFromCategory(category: string): Observable<any> {
    // const url = 'recipeslist/' + category;
    return this.getAllRecipes().map(recipes => {
      return recipes.filter(item => category === 'all' || item.field_recipe_varietal_tag.toLowerCase() === category.toLowerCase());
    });
  }

  getRecipesByCategory(): Observable<any> {

    return forkJoin(
      this.getCategoryList(),
      this.getAllRecipes()
    ).map((data) => {
      const [categories, recipes] = data;
      return categories.map(category => {
        return {
          category,
          items: recipes.filter(recipe => recipe.field_recipe_varietal_tag === category)
        };
      });
    });
  }

  getAllRecipes(): Observable<any> {
    return this.contentService.getPage('recipedetails');
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.contentService.getPage(`recipedetails/${id}`).map((recArray: Array<any>) => {
      return (new Recipe()).fillFromApiRequest(recArray[0]);
    });
  }
}
