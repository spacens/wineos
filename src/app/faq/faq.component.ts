import { Component, OnInit } from '@angular/core';
import {ContentService, Panel} from '../content.service';
declare var window: any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  providers: [ContentService]
})
export class FaqComponent implements OnInit {

  faqList: Panel[] = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getPanelsFromPage().subscribe(data => {
      this.faqList = data;
      setTimeout(window.initAccordion, 200);
    });
  }

}
