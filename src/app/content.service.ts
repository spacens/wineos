import {Injectable} from '@angular/core';
import {PageService} from 'ejg-page-service';
import {FeaturedContentService} from 'wineos-featured-content';
import {Observable} from 'rxjs/Observable';
import {concat, mergeMap} from 'rxjs/operators';
import {ConfigService} from 'ejg-config-service';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {Http, Headers } from '@angular/http';

export class Panel {
  field_panel_title = '';
  field_panel_body_text = '';
  field_image_export = '';
  field_panel_style =  '';
}
export class FeatureContentSimple {
  field_featured_content_image = '';
  field_featured_content_link = '';
  field_featured_content_link_text = '';
  field_featured_content_subtitle = '';
  field_featured_content_subtitle_1 = '';
  field_featured_content_title = '';
}

export class SocialLink {
  static validKeys = [
    'field_fb_link',
    'field_twitter_link',
    'field_instagram_link',
    'field_vimeo',
    'field_youtube_link',
    'field_pinterest_link',
  ];
  link = '';
  network = '';

  get icon() {
    return 'icon-' + this.network;
  }

  fillFromResponse(key: string, dataObj: any): SocialLink {
    const mapObj = {
      field_fb_link: 'facebook',
      field_twitter_link: 'twitter',
      field_instagram_link: 'instagram',
      field_vimeo: 'vimeo',
      field_youtube_link: 'youtube',
      field_pinterest_link: 'pinterest',
    };
    this.network = mapObj[key];
    this.link = dataObj.value;
    return this;
  }
}
export class SliderSimple {
  title = '';
  field_slider_image_button_text = '';
  field_link = '';
  field_show_left_right_arrows = '';
  field_show_slider_markers_ = '';
  field_show_thumbnails_ = '';
  field_subtitle = '';
  field_text_position = '';
  field_timing_in_seconds_ = '';
  field_title = '';
  field_image = '';
}
@Injectable()
export class ContentService {

  constructor(private http: Http, private configService: ConfigService,
              private pageService: PageService,
              private featuredServiceContent: FeaturedContentService) {
  }

  getPageAndJoinContent(): Observable<[FeatureContentSimple[][], SliderSimple[][], Panel[][]]> {

    return this.pageService.getData().pipe(
      mergeMap((data: any) => {
        const featuredCollectionRequests = data.field_featured_collection
          .filter(col => col.hasOwnProperty('target_type'))
          .map(target => this.getFeaturedPage(target.target_id));

        const sliderRequests = data.field_slider_gallery_content.map(target => this.getSlider(target.target_id));

        const panelRequests = [this.getPanels(data.nid[0].value)];
        return forkJoin(
          forkJoin.apply(this, featuredCollectionRequests),
          forkJoin.apply(this, sliderRequests),
          forkJoin.apply(this, panelRequests),
        );
      })
    );

  };

  getPage(url: string): Observable<any> {
    const httpOptions = {
      headers: new Headers({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get(this.configService.config.Drupal.Endpoint + url + '?_format=json', httpOptions)
      .map(res => res.json());
  }


  getFeaturedPage(id: any): Observable<any> {
    return this.featuredServiceContent.fetchPage(this.configService.config, id).map((data) => {
      return data.map(item => Object.assign(new FeatureContentSimple(), item));
    });
  }
  getPanels(id: string): Observable<Panel[]> {
    const url = `views/panels/node/${id}`;
    return this.getPage(url).map( panelsRaw => {
      return panelsRaw.map(panelRaw => Object.assign(new Panel(), panelRaw));
    });
  }

  getPanelsFromPage(): Observable<Panel[]> {
    return this.pageService.getData().pipe(
      mergeMap((data: any) => this.getPanels(data.nid[0].value))
    );
  }

  getSlider(id: string): Observable<SliderSimple[]> {
    const url = `views/slider/${id}`;

    return this.getPage(url).map(data => data.map(slide => {
      return Object.assign(new SliderSimple(), slide);
    }));
  }
  getSocialLinks(): Observable<SocialLink[]> {
    return this.getPage('block/social').map(data => {

      const validKeys = SocialLink.validKeys;

      return validKeys
        .filter(key => data.hasOwnProperty(key) && data[key].length)
        .map(key => {
          const dataObj = data[key][0];
          return (new SocialLink()).fillFromResponse(key, dataObj);
        });
    });
  }


}
