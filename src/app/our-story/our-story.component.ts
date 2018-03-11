import { Component, OnInit } from '@angular/core';
import {LargeBannerContent} from '../includes/large-banner/large-banner.component';
import {StorySectionContent, StorySectionImage} from '../includes/story-section/story-section.component';
import {ContentService, FeatureContentSimple} from '../content.service';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss'],
  providers: [ContentService]
})
export class OurStoryComponent implements OnInit {

  largeBannerContent: LargeBannerContent;
  storyBlockContent: StorySectionContent;
  listBlockContent: StorySectionContent;
  winningAwardsBlockContent: StorySectionContent;
  wineMakerBlockContent: StorySectionContent;

  constructor(private contentService: ContentService) { }

  // ngOnInit() {
  //   this.contentService.getFeturedContentCollections().subscribe((data) => {
  //     this.largeBannerContent = (new LargeBannerContent()).fillFromResponse(data[0] as FeatureContentSimple);
  //   });
  // }

  ngOnInit() {
    this.largeBannerContent = new LargeBannerContent(
      'We Believe in Brining People Together. With Wine.',
      'text',
      '/assets/markup/images/visual01.jpg');

    const items = [
      ['/assets/markup/images/img31.jpg'],
      ['/assets/markup/images/img32.jpg'],
      ['/assets/markup/images/img33.jpg', 'lg'],
      ['/assets/markup/images/img34.jpg', 'lg'],
      ['/assets/markup/images/img35.jpg'],
      ['/assets/markup/images/img36.jpg'],
    ];
    this.storyBlockContent = new StorySectionContent(
      'Barefoot is wine for you, whoever you are.',
      'content',
      items.map((item) => {
        const inst = new StorySectionImage();
        [inst.image, inst.size] = item;
        return inst;
      }));

    const listItems = [
      ['/assets/markup/images/img37.jpg', 'title', 'descr'],
      ['/assets/markup/images/img38.jpg', 'title', 'descr'],
      ['/assets/markup/images/img39.jpg', 'title', 'descr'],
    ];

    this.listBlockContent = new StorySectionContent(
      'We support communities',
      'desription',
      listItems.map((item) => {
        const inst = new StorySectionImage();
        [inst.image, inst.title, inst.description] = item;
        return inst;
      })
    );
    const winItems = [
      ['/assets/markup/images/img41.jpg'],
      ['/assets/markup/images/img42.jpg'],
      ['/assets/markup/images/img40.jpg', 'lg hide-mobile'],
      ['/assets/markup/images/img43.jpg', 'lg'],
    ];
    this.winningAwardsBlockContent = new StorySectionContent(
      'Winning awards for  Being Delicious',
      'Description',
      winItems.map((item) => {
        const inst = new StorySectionImage();
        [inst.image, inst.size] = item;
        return inst;
      })
    );

    const wineMakerItems = [
      ['/assets/markup/images/img44.jpg'],
      ['/assets/markup/images/img45.jpg'],
      ['', 'lg', 'Our winemaker', 'Long description'],
    ];

    this.wineMakerBlockContent = new StorySectionContent();
    this.wineMakerBlockContent.items = wineMakerItems.map((item) => {
      const inst = new StorySectionImage();
      [inst.image, inst.size, inst.title, inst.description] = item;
      return inst;
    });


  }

}
