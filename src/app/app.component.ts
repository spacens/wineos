// Angular Imports
import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare global {
  interface Window {
    initMobileNav: any;
    initSearchToggle: any;
    initSliderWine: any;
    initAnchor: any;
    initNiceSelect: any;
    initSliderBlog: any;
    initIsotopeGrid: any;

  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

   constructor( private router: Router ) { }

   public ngOnInit() {
       // Remove session storage on page reload.
       sessionStorage.clear();
       // Scroll to top on router change
       this.router.events.subscribe((event: NavigationEnd) => {
         if (event instanceof NavigationEnd) {
           window.scrollTo(0, 0);
         }
       });
   }

  public ngAfterViewInit() {
       // window.initMobileNav();
       // window.initSearchToggle();
       // window.initSliderWine();
       // window.initAnchor();
       // window.initNiceSelect();
       // window.initSliderBlog();
       // window.initIsotopeGrid();
  }
}
