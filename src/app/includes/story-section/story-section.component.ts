import {Component, Input, OnInit} from '@angular/core';
import {SliderItem} from '../slider/slider.component';
import {SliderSimple} from '../../content.service';


export class StorySectionImage {
  constructor(public image = '',
              public title = '',
              public description = '', public size = '') {}
  fillFromSliderSimple(item: SliderSimple): StorySectionImage {
    this.image = item.field_image;
    return this;
  }
}

export class StorySectionContent {
  constructor(public title = '',
              public description = '',
              public items: StorySectionImage[] = []) {
  }
}
@Component({
  selector: 'app-story-section',
  templateUrl: './story-section.component.html',
})
export class StorySectionComponent implements OnInit {

  @Input() content: StorySectionContent;
  @Input() listClass = '';
  constructor() { }

  ngOnInit() {
  }

}
