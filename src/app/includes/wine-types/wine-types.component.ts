import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export class WineSort {
  title = '';
  img = '';

  get sort(): string {
    return '#' + this.title.toLowerCase() + '-wine';
  }
  sameTitle(str: string): boolean {
    return this.title.toLowerCase() === str.toLowerCase();
  }
}

@Component({
  selector: 'app-wine-types',
  templateUrl: './wine-types.component.html',
  styleUrls: ['./wine-types.component.scss']
})
export class WineTypesComponent implements OnInit {

  wineSortList: WineSort[] = [];
  selectedWineSort: WineSort;
  @Input() wineChangeStream: Observable<any>;
  @Output() wineSortChanged = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
    const fakeData = [
      ['Red', '/assets/markup/images/img15.png'],
      ['White', '/assets/markup/images/img16.png'],
      ['Pink', '/assets/markup/images/img17.png'],
      ['Bubbly', '/assets/markup/images/img18.png'],
      ['Spritzer', '/assets/markup/images/img19.png'],
    ];


    this.wineSortList = fakeData.map(item => {
      const wineSort = new WineSort();
      [wineSort.title, wineSort.img] = item;
      return wineSort;
    });


    this.wineChangeStream.subscribe((data) => {
      if (data.hasOwnProperty('sort')) {
        const wineStr = data.sort.toLowerCase();
        for (const wine of this.wineSortList) {
          if (wine.title.toLowerCase() === wineStr) {
            this.select(wine);
            break;
          }
        }
      } else {
        this.clear();
      }

    });
  }
  select(sort: WineSort) {
    this.selectedWineSort = sort;
    this.wineSortChanged.emit(sort);
  }
  clear() {
    this.selectedWineSort = null;
    this.wineSortChanged.emit(null);
  }

}
