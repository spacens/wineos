// Angular Imports
import { Component, OnInit } from '@angular/core';

// EJG Services
import { ConfigService } from 'ejg-config-service';
import { PageService } from 'ejg-page-service';

@Component({
  selector: 'app-wineos-varietal',
  styles: [`

  `],
  providers: [ PageService ],
  templateUrl: './varietal.component.html'
})

export class WinesVarietalComponent implements OnInit {

 public config: any;
 public pageData: any;

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
