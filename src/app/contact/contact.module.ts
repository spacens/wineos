// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Component Imports
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

// WineOS Imports
import { ContactUsModule } from 'wineos-contactus';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TextMaskModule} from 'angular2-text-mask';
import { ContactFormComponent } from './contact-form/contact-form.component';




@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    ReactiveFormsModule,
    ContactUsModule,
    ContactRoutingModule,
  ],
  exports: [
      ContactComponent,
  ]
})
export class ContactModule {}
