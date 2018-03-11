import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqComponent} from './faq.component';
import {FaqRouting} from './faq.routing';
import {FeaturedContentModule} from 'wineos-featured-content';
import {ContentModule} from 'wineos-content';

@NgModule({
  imports: [
    CommonModule,
    FaqRouting,
  ],
  declarations: [FaqComponent]
})
export class FaqModule {
}
