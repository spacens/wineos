import {Component, Input, OnInit} from '@angular/core';
import {FeatureContentSimple} from '../../content.service';

export class LargeBannerContent {
  constructor(public title = '',
              public description = '', public backgroundImage = '',
              public buttonText = '',
              public buttonLink = '') {
  }

  get backgroundImageUrl(): string {
    return `url('${this.backgroundImage}')`;
  }
  fill(item: FeatureContentSimple): LargeBannerContent {
    this.title = item.field_featured_content_title;
    this.description = item.field_featured_content_subtitle;
    this.buttonText = item.field_featured_content_link_text;
    this.buttonLink = item.field_featured_content_link;

    return this;
  }
}

@Component({
  selector: 'app-large-banner',
  templateUrl: './large-banner.component.html',
  styleUrls: ['./large-banner.component.scss']
})
export class LargeBannerComponent implements OnInit {
  @Input() content: LargeBannerContent;

  constructor() {
  }

  ngOnInit() {
  }

}
