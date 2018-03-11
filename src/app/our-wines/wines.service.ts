import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tag} from '../includes/tag-list/tags.service';
import {ProductCatalogService} from 'wineos-productcatalog';
import {ConfigService} from 'ejg-config-service';
import {ContentService} from '../content.service';
import {publishReplay, publish, refCount} from 'rxjs/operators';

export class WineItem {
  id = '';
  tags: Tag[] = [];
  title = '';
  image = '';
  description = '';
  sortOfWine = '';

  get url(): string[] {
    return ['/our-wine/detail', this.id];
  }
  fillFromResponse(data: any): WineItem {

    this.image = data.field_bottleshot_image;
    this.title = data.title;
    this.id = data.nid;
    this.tags = data.field_product_wine_style_export.map(item => {
      return (new Tag()).fillFromWineResponse(item);
    });

    const re = />(.+)</;
    const math = re.exec(data.field_wine_type_export[0]);
    if (math) {
      this.sortOfWine = math[1].toLowerCase();
      console.log(this.sortOfWine);
    }
    return this;
  }

  fillFromByIdResponse(data: any): WineItem {
    this.id = data.nid;
    this.title = data.title;
    this.image = data.field_bottleshots_content_hub;
    this.description = data.field_product_overview;
    this.tags = data.field_product_wine_style_export.map(item => {
      return (new Tag()).fillFromWineResponse(item);
    });
    return this;
  }
}

@Injectable()
export class WinesService {

  constructor(private configService: ConfigService,
              private productCatalogService: ProductCatalogService,
              private contentService: ContentService) {
  }


  getWineListBySortOfWine(sort: string) {
    return this.getAllWines().map(wines => wines.filter(wine => wine.sortOfWine === sort));
  }
  getWineTags(): Observable<Tag[]> {
    return this.getAllWines().map((allWines: WineItem[]) => {
      const tags: Tag[] = [];
      const tagIds = [];
      allWines.forEach(wine => {
        wine.tags.forEach(tag => {
          if (tagIds.indexOf(tag.id) === -1) { // we need only uniq tags
            tags.push(tag);
            tagIds.push(tag.id);
          }
        });
      });
      return tags;
    });
  }

  getWineById(id: string): Observable<WineItem> {
    return this.contentService.getPage(`product-detail/${id}`)
      .map(wineList => {
        const wineRes = wineList[0];
        return (new WineItem()).fillFromByIdResponse(wineRes);
      });
  }

  getAllWines(): Observable<WineItem[]> {

    const obs = this.productCatalogService.sortNewest(this.configService.config).map((data: Array<any>) => {

      return data.map(obj => (new WineItem()).fillFromResponse(obj));
    });

    return obs;
  }

}
