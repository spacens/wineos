import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OurWinesComponent} from './our-wines.component';
import {OurWinesRouting} from './our-wines.routing';
import { WinePromoComponent } from './wine-promo/wine-promo.component';
import {TagListModule} from '../includes/tag-list/tag-list.module';
import {WineShowcaseModule} from '../includes/wine-showcase/wine-showcase.module';
import {FeaturedContentModule} from 'wineos-featured-content';
import {WineTypesModule} from '../includes/wine-types/wine-types.module';
import {ProductCatalogModule} from 'wineos-productcatalog';
import {WinesService} from './wines.service';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import {MeetSectionComponent} from '../homepage/meet-section/meet-section.component';
import {HomepageModule} from '../homepage/homepage.module';
import {MeetSectionModule} from '../homepage/meet-section/meet-section.module';

@NgModule({
  imports: [
    CommonModule,
    OurWinesRouting,
    TagListModule,
    WineShowcaseModule,
    FeaturedContentModule,
    WineTypesModule,
    MeetSectionModule,
  ],
  declarations: [
    OurWinesComponent,
    WinePromoComponent,
    WineDetailComponent,
  ],
  providers: [
    WinesService
  ]
})
export class OurWinesModule {
}
