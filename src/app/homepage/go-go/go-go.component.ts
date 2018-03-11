import {Component, Input, OnInit} from '@angular/core';
import {FeatureContentSimple} from '../../content.service';

export class GoGoContent {
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
  }
}
@Component({
  selector: 'app-go-go',
  templateUrl: './go-go.component.html',
  styleUrls: ['./go-go.component.scss']
})
export class GoGoComponent implements OnInit {

  @Input() content: GoGoContent;
  constructor() { }

  ngOnInit() {
  }

}
