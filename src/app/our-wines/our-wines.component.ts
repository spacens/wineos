import {Component, OnInit} from '@angular/core';
import {WinePromo} from './wine-promo/wine-promo.component';
import {Tag} from '../includes/tag-list/tags.service';
import {PageService} from 'ejg-page-service';
import {ContentService} from '../content.service';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {WineSort} from '../includes/wine-types/wine-types.component';

@Component({
  selector: 'app-our-wines',
  templateUrl: './our-wines.component.html',
  styleUrls: ['./our-wines.component.scss'],
  providers: [ContentService]
})
export class OurWinesComponent implements OnInit {
  winePromos: WinePromo[];
  selectedTags: Tag[] = [];
  selectedWineSort: WineSort;
  wineSelectStream: Observable<any>;

  constructor(private contentService: ContentService, private route: ActivatedRoute) {
    this.wineSelectStream = this.route.params;
    this.winePromos = [
      new WinePromo('stripe-green',
      'try something sweet',
      '',
      '/assets/markup/images/img23.png',
      'Moscato',
      'Pinot grigio'),
      new WinePromo('stripe-orange',
      'With a hint  of citrus',
      'blabla',
      '/assets/markup/images/img24.png',
      'Moscato'),

    ];
  }

  ngOnInit() {
  }

  onTagChange(tags: Tag[]) {
    this.selectedTags = tags.filter(tag => tag.selected);
  }
  onWineSortChange(sort: WineSort) {
    console.log(sort);
    this.selectedWineSort = sort;
  }

}
