import {Component, Input, OnInit} from '@angular/core';
import {WineItem, WinesService} from '../../our-wines/wines.service';
import {Tag} from '../tag-list/tags.service';

@Component({
  selector: 'app-wine-showcase',
  templateUrl: './wine-showcase.component.html',
  styleUrls: ['./wine-showcase.component.scss'],
  providers: [WinesService]
})
export class WineShowcaseComponent implements OnInit {

  @Input() title: '';
  @Input() sortOfWine = '';
  @Input() selectedTags: Tag[];
  wineList: WineItem[];

  constructor(private wineService: WinesService) {

  }

  ngOnInit() {
    this.wineService.getWineListBySortOfWine(this.sortOfWine).subscribe((data) => this.wineList = data);
  }

}
