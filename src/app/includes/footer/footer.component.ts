// Angular Imports
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SocialLinkService} from 'wineos-social-link';
import {ContentService, SocialLink} from '../../content.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.scss'],
  providers: [ContentService]
})
export class AppFooterComponent implements OnInit {
  copyright = '';
  logoImage = '';
  showNewsModal = false;
  socialLinks: SocialLink[] =  [];

  constructor(private contentService: ContentService) {
  }
  ngOnInit(): void {
    this.contentService.getSocialLinks().subscribe(links => {
      console.log(links);
      this.socialLinks = links;
    });
    // load from API
    this.copyright = '&copy;2017 Barefoot Cellars, Modesto, CA. All rights reserved.';
    this.logoImage = '/assets/markup/images/logo-white.svg';
  }

  showNewsletter() {
    this.showNewsModal = true;
  }
  hideNewslatter() {
    this.showNewsModal = false;
  }
}
