import {Component, Input, OnInit} from '@angular/core';
import {FeatureContentSimple} from '../../content.service';

export class LifeIsBetterContent {
  constructor(public title = '',
              public image = '',
              public description = '',
              public buttonText = '',
              public buttonLink = '') {
  };

  fill(item: FeatureContentSimple) {
    this.title = item.field_featured_content_title;
    this.image = item.field_featured_content_image;
    this.description = item.field_featured_content_subtitle;
    this.buttonText = item.field_featured_content_link_text;
    this.buttonLink = item.field_featured_content_link;
    return this;
  }
}
@Component({
  selector: 'app-life-is-better',
  templateUrl: './life-is-better.component.html',
  styleUrls: ['./life-is-better.component.scss']
})
export class LifeIsBetterComponent implements OnInit {

  @Input() content: LifeIsBetterContent;
  constructor() { }

  ngOnInit() {
    console.log(this.content);
  }

}
