import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'ejg-config-service';
import {Router, ActivatedRoute, NavigationEnd, RoutesRecognized} from '@angular/router';
import 'rxjs/add/operator/filter';

declare var $;
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})

export class AppHeaderComponent implements OnInit {
  public config: any;
  public routerSubscription: any;
  public routerPath: any;
  public headerClass = '';

  constructor(public configSrvc: ConfigService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit() {
    this.config = this.configSrvc.config

    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const dataObject: any = (data.state.root && data.state.root.firstChild && data.state.root.firstChild.data)
          ? data.state.root.firstChild.data
          : {};
        this.headerClass = dataObject.hasOwnProperty('headerClass') ? dataObject.headerClass : '';
      }
    });
  }

}
