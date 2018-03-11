// Angular Imports
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// Component Imports
import { AppFooterComponent } from './footer.component';

// WineOS Imports
import { HeaderLogoModule } from 'wineos-header-logo';
import { FooterContentModule } from 'wineos-footercontent';
import {MenuModule} from '../menu/menu.module';
import {RouterModule} from '@angular/router';
import {LegalModule} from '../../legal/legal.module';
import {LegalRoutingModule} from '../../legal/legal.router';
import {ContactRoutingModule} from '../../contact/contact.routing';
import {SocialLinkModule} from 'wineos-social-link';
import { NewsletterComponent } from './newsletter/newsletter.component';
import {NewsletterModule} from './newsletter/newsletter.module';

@NgModule({
  declarations: [
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderLogoModule,
    HttpModule,
    FooterContentModule,
    MenuModule,
    LegalRoutingModule,
    ContactRoutingModule,
    SocialLinkModule,
    NewsletterModule,
  ],
  providers: [],
  exports: [
    AppFooterComponent
  ]
})
export class AppFooterModule {}
