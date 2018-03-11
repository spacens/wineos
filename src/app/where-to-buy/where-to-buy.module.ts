import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhereToBuyComponent } from './where-to-buy.component';
import {WhereToBuyRouting} from './where-to-buy.routing';
import {FormsModule} from '@angular/forms';
import {JsonpModule} from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    WhereToBuyRouting,
    FormsModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBn9-hYajuAC_8mCDWgSf-mECb_OlgkO9k'
    }),

  ],
  declarations: [WhereToBuyComponent],
 //  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WhereToBuyModule { }
