// Angular Imports
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
// EJG Imports
import { PageService } from 'ejg-page-service';

 @Component({
   encapsulation: ViewEncapsulation.None,
   providers: [ PageService ],
   selector: 'app-winefinder',
   styleUrls: ['./winefinder.scss'],
   templateUrl: './winefinder.component.html'
 })

export class WinefinderComponent implements OnInit {
  public pageData: any;

  constructor( private pageService: PageService) {}

  public ngOnInit() {

    // Get page data
    this.pageService.getData().subscribe((data) => {
      this.pageData = data;
    },
    (error) => {
      console.error('Error fetching page data!');
    });
  }
}
