// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Compontent Imports
import { WinesCatalogComponent } from './catalog.component';

// WinesOS Imports
import { ProductCatalogModule } from 'wineos-productcatalog';
import { FeaturedContentModule } from 'wineos-featured-content';

@NgModule({
  declarations: [
    WinesCatalogComponent
  ],
    exports: [
      WinesCatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCatalogModule,
    FeaturedContentModule
  ]
})
export class WinesCatalogModule {}
