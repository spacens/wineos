// App initializer
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importing Includes
import { AppHeaderModule } from './includes/header/header.module';
import { AppFooterModule } from './includes/footer/footer.module';

// Page Modules
import { ContactModule } from './contact/contact.module';
import { GeneralModule } from './general/general.module';
import { HomepageModule } from './homepage/homepage.module';
import { LegalModule } from './legal/legal.module';
import { SubscribeModule } from './subscribe/subscribe.module';
import { WinesModule } from './wines/wines.module';
import { WinefinderModule } from './winefinder/winefinder.module';

// Other Imports
import { MetadataModule } from 'ng2-metadata';

// Import ConfigService
import { ConfigService } from 'ejg-config-service';

import {OurWinesModule} from './our-wines/our-wines.module';
import {OurStoryModule} from './our-story/our-story.module';
import {WhereToBuyModule} from './where-to-buy/where-to-buy.module';
import {BlogModule} from './blog/blog.module';
import {RecipesModule} from './recipes/recipes.module';
import {FeaturedContentModule, FeaturedContentService} from 'wineos-featured-content';
import {PageService} from 'ejg-page-service';
import {ProductCatalogService} from 'wineos-productcatalog';
import {ContentService} from './content.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import {FaqModule} from './faq/faq.module';
import {InternationalModule} from './international/international.module';
// Export ConfigService to use on app start
export function configServiceFactory(config: ConfigService) {
    return () => config.load();
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MetadataModule,
    AppHeaderModule,
    BrowserModule,
    ContactModule,
    HomepageModule,
    LegalModule,
    GeneralModule,
    WinesModule,
    SubscribeModule,
    WinefinderModule,
    AppRoutingModule,
    OurWinesModule,
    OurStoryModule,
    WhereToBuyModule,
    BlogModule,
    RecipesModule,
    FaqModule,
    InternationalModule,
    AppFooterModule,
  ],
  providers: [
    ContentService,
    ConfigService,
    PageService,
    FeaturedContentService,
    ProductCatalogService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
