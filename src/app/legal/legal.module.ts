// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components Import
import { LegalComponent } from './legal.component';
import { LegalRoutingModule } from './legal.router';

// WineOS Imports
import { LegalContentModule } from 'wineos-legalcontent';



@NgModule({
  declarations: [
    LegalComponent,
  ],
  imports: [
    CommonModule,
    LegalContentModule,
    LegalRoutingModule
  ],
  exports: [LegalComponent]
})
export class LegalModule {}
