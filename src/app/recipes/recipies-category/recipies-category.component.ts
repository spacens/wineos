import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../../recipes.service';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {ActivatedRoute, Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {Link} from '../../includes/menu/menu.component';
import {ArchiveItem} from '../../includes/archive-item/archive-item.component';

@Component({
  selector: 'app-recipies-category',
  templateUrl: './recipies-category.component.html',
  styleUrls: ['./recipies-category.component.scss'],
  providers: [RecipesService]
})
export class RecipiesCategoryComponent implements OnInit {

  categoryLinks: Link[];
  archiveItems: ArchiveItem[];

  constructor(private recipesService: RecipesService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.pipe(
      mergeMap(params => {
        return forkJoin(
          this.recipesService.getCategoryList(),
          this.recipesService.getRecipesFromCategory(params['category'])
        );
      })
    ).subscribe(([categoryList, recipes]) => {
      categoryList.unshift('all');
      this.categoryLinks = categoryList.map(cat => {
        const item = new Link();
        item.title = cat;
        item.link = ['/recipes', cat];
        return item;
      });

      this.archiveItems = recipes.map(recipe => (new ArchiveItem()).fillFromRecipeRequest(recipe));

    });
  }

}
