 // Angular Imports
 import { Component, OnInit, ViewEncapsulation } from '@angular/core';
 // EJG Services
import { ConfigService } from 'ejg-config-service';
import { PageService } from 'ejg-page-service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-general',
  providers: [ PageService ],
  styleUrls: ['./general.scss'],
  templateUrl: './general.component.html'
})

export class GeneralComponent implements OnInit {
    public pageData: any;
    public config: any;
    public editorMode = false;

    constructor(private configSrvc: ConfigService,
                private pageService: PageService) {
    }
    // Grab config file
    public ngOnInit() {
      // ng init statement goes here
     this.config = this.configSrvc.config;
     this.editorMode = this.configSrvc.isEditor();

     // Get page data
     this.pageService.getData().subscribe((data) => {
       this.pageData = data;
     },
     (error) => {
       console.error('Error fetching page data!');
     });
    }

}
