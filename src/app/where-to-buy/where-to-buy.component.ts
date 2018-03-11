import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgModel} from '@angular/forms';
import {WineItem} from '../our-wines/wines.service';
import {ShopLocation, WhereToBuyService} from './where-to-buy.service';
import {SebmGoogleMapInfoWindow} from 'angular2-google-maps/core';
declare var window: any;
@Component({
  selector: 'app-where-to-buy',
  templateUrl: './where-to-buy.component.html',
  styleUrls: ['./where-to-buy.component.scss'],
  providers: [WhereToBuyService]
})
export class WhereToBuyComponent implements OnInit {

  @ViewChildren('infoWindow') infoWindow: QueryList<SebmGoogleMapInfoWindow>;
  lat = 40.7831;
  lng = -73.9712; // Manhattan
  zoom = 15;
  groupId = 28;   // 28 or 72 magic valules
  address = '';
  wineItems: WineItem[];
  selectedWine: WineItem;
  shopList: ShopLocation[];
  currentInfoWindow: SebmGoogleMapInfoWindow;
  showItems = 10;

  constructor(private router: ActivatedRoute, private whereToService: WhereToBuyService) {
  }

  ngOnInit() {
    this.router.params
      .filter(data => data.hasOwnProperty('address'))
      .map((data: any) => data.address)
      .subscribe((data) => {
        this.address = data;
      });

    this.whereToService.getVariants().subscribe(data => {
      this.wineItems = data;
      this.selectedWine = this.wineItems[0];
      if (this.address) {
        this.submit();
      }
      window.initNiceSelect();
    });

  }

  submit() {
    this.whereToService.getShopList(this.groupId.toString(), this.selectedWine.id, this.address, '10').subscribe(data => {
      this.shopList = data;
      this.showItems = 10;
      this.currentInfoWindow = null;
      if (this.shopList.length > 0) {
        this.lat = this.shopList[0].latitude;
        this.lng = this.shopList[0].longitude;
      }
    });
  }

  selectGroup(id: number) {
    this.groupId = id;
  }

  selectShop(shop: ShopLocation, pointTo = false) {

    console.log(this.infoWindow);
    this.shopList.some((sh, idx) => {
      const result = sh === shop;
      if (result) {
        if (this.currentInfoWindow)  {
          this.currentInfoWindow.close();
        }
        this.currentInfoWindow = this.infoWindow.toArray()[idx];
        this.currentInfoWindow.open();
        if (pointTo) {
          [this.lat, this.lng] = [shop.latitude, shop.longitude];
        }
      }
      return result;
    });
  }
  showMore() {
    this.showItems += 10;
  }
  selectWine(wine: WineItem) {
    this.selectedWine = wine;
  }
}





