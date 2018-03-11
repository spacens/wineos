import { Component, OnInit } from '@angular/core';
import {NewsletterComponent as WineosNewsletterComponent, NewsletterService} from 'wineos-newsletter';
import {ConfigService} from 'ejg-config-service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  providers: [NewsletterService, FormBuilder]
})
export class NewsletterComponent extends WineosNewsletterComponent {


}
