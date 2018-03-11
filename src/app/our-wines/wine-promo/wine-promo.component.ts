import {Component, Input, OnInit} from '@angular/core';

export class WinePromo {
  constructor(public blockDesign = '',
              public title = '',
              public description = '',
              public image = '',
              public leftText = '',
              public rightText = '') {
  }
}

@Component({
  selector: 'app-wine-promo',
  templateUrl: './wine-promo.component.html',
  styleUrls: ['./wine-promo.component.scss']
})
export class WinePromoComponent implements OnInit {
  @Input() winePromo: WinePromo;

  constructor() {
    this.winePromo = new WinePromo();
  }

  ngOnInit() {
  }

}
