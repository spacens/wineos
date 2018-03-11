import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeBannerComponent } from './large-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LargeBannerComponent],
  exports: [LargeBannerComponent]
})
export class LargeBannerModule { }
