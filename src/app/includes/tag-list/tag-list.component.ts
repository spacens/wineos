import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tag, TagsService} from './tags.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  providers: [TagsService]
})
export class TagListComponent implements OnInit {

  tagList: Tag[] = [];
  @Input() displayTags = 6;
  @Output() onChange = new EventEmitter<Tag[]>();

  constructor(private tagService: TagsService) {

  }

  ngOnInit() {
    this.tagService.getTagList().subscribe((data) => {
      this.tagList = data;
      this.listChanged();
   //   console.log(this.tagList);
    });
  }

  selectTag(tag: Tag) {
    tag.selected = true;
    this.listChanged();
  }

  removeTag(tag: Tag) {
    tag.selected = false;
    this.listChanged();
  }

  moreTags(): void {
    this.displayTags += 6;
  }
  private listChanged() {
    this.onChange.emit(this.tagList);
  }


}
