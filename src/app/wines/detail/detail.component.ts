// Angular Imports
import { Component, OnInit, ViewEncapsulation, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

// EJG Services
import { ConfigService } from 'ejg-config-service';
import { PageService } from 'ejg-page-service';

declare var $;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-wineos-shopdetail',
  styleUrls: ['./detail.scss'],
  providers: [ PageService ],
  templateUrl: './detail.component.html'
})

export class WinesDetailComponent implements OnInit {
 public pageData: any;
 public config: any;

  constructor(
              private configSrvc: ConfigService,
              private pageService: PageService
              ) {
              }

  // Grab config file
  public ngOnInit() {
    // ng init statement goes here
    this.config = this.configSrvc.config;

    // Get page data
    this.pageService.getData().subscribe((data) => {
      this.pageData = data;
    },
    (error) => {
      console.error('Error fetching page data!');
    });
  }


}
