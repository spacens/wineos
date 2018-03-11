import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsletterComponent} from './newsletter.component';
import {NewsletterModule as wineosNewsletterModule} from 'wineos-newsletter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    wineosNewsletterModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    RouterModule,
  ],
  declarations: [    NewsletterComponent],
  exports: [NewsletterComponent]
})
export class NewsletterModule { }
