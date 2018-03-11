import {Component, Input, OnInit} from '@angular/core';

export class ArchiveItem {
  id = '';
  title = '';
  description = '';
  image = '';
  category = '';
  link: any;
  date: Date;
  class = 'border-blue-1';

  get backgroundImageUrl(): string {
    return `url('${this.image}')`;
  }

  fillFromRecipeRequest(item: any): ArchiveItem {
    this.id = item.nid;
    this.title = item.field_recipe_title;
    this.description = item.field_recipe_description;
    this.image = item.field_recipe_images;
    this.category = item.field_recipe_varietal_tag;
    this.link = ['/recipes', this.category, this.id];
    this.date = new Date();
    return this;
  }
  fillFromBlogRequest(item: any): ArchiveItem {
    this.id = item.nid;
    this.title = item.title;
    this.category = item.field_blog_tags;
    this.description = item.field_page_content.field_text_content;
    this.image = item.field_page_content.field_image;
    this.link = ['/blog', this.category, this.id];
    this.class = 'border-yellow-1';
    return this;
  }
}

@Component({
  selector: 'app-archive-item',
  templateUrl: './archive-item.component.html',
  styleUrls: ['./archive-item.component.scss']
})
export class ArchiveItemComponent implements OnInit {

  @Input() item: ArchiveItem;
  constructor() { }

  ngOnInit() {
  }

}
