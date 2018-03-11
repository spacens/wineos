import { Component, OnInit } from '@angular/core';
import {Tag, TagsService} from '../../includes/tag-list/tags.service';

@Component({
  selector: 'app-wine-section',
  templateUrl: './wine-section.component.html',
  styleUrls: ['./wine-section.component.scss'],
  providers: [TagsService]
})
export class WineSectionComponent implements OnInit {

  tagList: Tag[]
  constructor(private tagService: TagsService) { }

  ngOnInit() {
    this.tagService.getTagList().subscribe(tags => this.tagList = tags);
  }

}
