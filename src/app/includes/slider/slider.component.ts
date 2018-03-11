import {Component, Input, OnInit} from '@angular/core';

export class SliderItem {
  id = '';
  title = '';
  description = '';
  image = '';
  link: any;
  fillFromRecipe(item: any): SliderItem {

    this.id = item.nid;
    this.title = item.title;
    this.description = item.field_recipe_description;
    this.image = item.field_recipe_images;
    this.link = ['/recipes', item.field_recipe_varietal_tag, this.id];
    return this;
  }

  fillFromBlogPostRequest(item: any): SliderItem {

    this.id = item.nid;
    this.title = item.title;
    this.description = item.field_page_content.field_text_content;
    this.image = item.field_page_content.field_image;
    this.link = ['/blog', item.field_blog_tags, this.id];
    return this;
  }
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() color = 'yellow';
  @Input() title = '';
  @Input() items: SliderItem[];
  @Input() allLink: any;
  constructor() { }

  ngOnInit() {
  }

}
