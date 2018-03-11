// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Importing Wine Pages
import { WinesComponent } from './wines.component';
import { WinesCatalogModule} from './catalog/catalog.module';
import { WinesDetailModule } from './detail/detail.module';
import { WinesRoutingModule } from './wines.routing';
import { WinesVarietalModule } from './varietal/varietal.module';

// WineOS imports
import { ProductCatalogModule } from 'wineos-productcatalog';
import { FeaturedContentModule } from 'wineos-featured-content';
import { SliderModule } from 'wineos-slider';
import { ContentModule } from 'wineos-content';
import { NavigationModule } from 'wineos-navigation';

@NgModule({
  declarations: [
    WinesComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    NavigationModule,
    ProductCatalogModule,
    SliderModule,
    FeaturedContentModule,
    WinesCatalogModule,
    WinesDetailModule,
    WinesVarietalModule,
    RouterModule,
    WinesRoutingModule
  ],
  exports: [
      WinesComponent
  ]
})
export class WinesModule {}
