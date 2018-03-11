import {Component, OnInit} from '@angular/core';
import {WineItem, WinesService} from '../wines.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {

  wineItem: WineItem;

  constructor(private winesService: WinesService, private route: ActivatedRoute) {
    this.wineItem = new WineItem();
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap(params => this.winesService.getWineById(params['id']))
    )
      .subscribe(data => {
        console.log(data);
        this.wineItem = data;
      });
  }

}
