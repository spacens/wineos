// Angular Imports
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

// Component Imports
import { AppHeaderComponent } from './header.component';

// WineOS Imports
import { HeaderLogoModule } from 'wineos-header-logo';
import { NavigationModule } from 'wineos-navigation';
import { SocialLinkModule } from 'wineos-social-link';
import { AdminModule } from 'wineos-admin';
import {AgeGateModule} from 'wineos-agegate';

import {AgeGateComponent} from './age-gate/age-gate.component';
import {RouterModule} from '@angular/router';
import {MenuModule} from '../menu/menu.module';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AgeGateComponent
  ],
  imports: [
    CommonModule,
    AgeGateModule,
    HeaderLogoModule,
    AdminModule,
    SocialLinkModule,
    NavigationModule,
    MenuModule,
    RouterModule
  ],
  exports: [AppHeaderComponent, AgeGateComponent]
})
export class AppHeaderModule {}
