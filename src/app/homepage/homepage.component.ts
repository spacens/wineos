// Angular Imports
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LifeIsBetterContent} from './life-is-better/life-is-better.component';
import {GoGoContent} from './go-go/go-go.component';
import {StorySectionContent, StorySectionImage} from '../includes/story-section/story-section.component';
import {ContentService} from '../content.service';



@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-homepage',
  styleUrls: ['./homepage.scss'],
  templateUrl: './homepage.component.html',
  providers: [ContentService],
})

export class HomepageComponent implements OnInit {

  lifeIsBetterContent: LifeIsBetterContent;
  goGoContent: GoGoContent;
  socialSectionContent: StorySectionContent;

  constructor(private contentService: ContentService) {
  }
  ngOnInit(): void {

    this.contentService.getPageAndJoinContent().subscribe(([featured, sliders]) => {
      this.lifeIsBetterContent = (new LifeIsBetterContent()).fill(featured[0][0]);
      this.socialSectionContent = new StorySectionContent(
        '#GetBarefoot',
        'Share photos of all your favorite Barefoot moments.');
      this.socialSectionContent.items = sliders[0].map((slide) => {
        return (new StorySectionImage()).fillFromSliderSimple(slide);
      });
    });
  }

  private loadFakeData(data?: any) {
    // load data from API
    this.lifeIsBetterContent = new LifeIsBetterContent(
      'Life’s better with Barefoot',
      '/assets/markup/images/img01.png',
      'We’re always down to make some new friends. ' +
      'That’s why we make delicious wines that bring people together over good drinks and good times.',
      'Find your Barefoot wine',
      '/');

    this.goGoContent = new GoGoContent('Go go', '/assets/markup/images/img02.jpg', 'description',
      'Go', '');


    const items = [
      ['/assets/markup/images/img09.jpg', '@max', '', 'From facebook'],
      ['/assets/markup/images/img10.jpg', '@max', '', 'From facebook'],
      ['/assets/markup/images/img11.jpg', '@max', 'lg', 'From facebook'],
      ['/assets/markup/images/img12.jpg', '@max', 'lg', 'From facebook'],
      ['/assets/markup/images/img13.jpg', '@max', '', 'From facebook'],
      ['/assets/markup/images/img14.jpg', '@max', '', 'From facebook'],
    ];
    this.socialSectionContent = new StorySectionContent(
      '#GetBarefoot',
      'Share photos of all your favorite Barefoot moments.',
      items.map((item) => {
        const ins = new StorySectionImage();
        [ins.image, ins.title, ins.size, ins.description] = item;
        return ins;
      }));
  }
}
