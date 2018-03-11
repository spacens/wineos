import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {WineItem} from '../our-wines/wines.service';
import {Http, Jsonp} from '@angular/http';
import {URLSearchParams} from '@angular/http/src/url_search_params';

export class ShopLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  channelCode: number;
  longitude: number;
  latitude: number;
  distance: number;
  zipCentric: number;
  openInfoWindow = false;
}

@Injectable()
export class WhereToBuyService {
  fakeData: Array<[number, string]> = [
    [2551, 'Refresh Can Moscato Spritzer'],
    [2519, 'Rose'],
    [2552, 'Refresh Can Rose Spritzer'],
    [2234, 'Refresh Can Summer Red Spritzer'],
    [2235, 'Refresh Can Crisp White Spritzer'],
    [1547, 'Sweet Red Champagne'],
    [2475, 'Winter Blend'],
    [2504, 'Sangria'],
    [1970, 'Bubbly Peach'],
    [1742, 'Bubbly Berry'],
    [1743, 'Bubbly Orange'],
    [1744, 'Bubbly Pineapple'],
    [588, 'Bubbly Brut Cuvee'],
    [589, 'Bubbly Extra Dry'],
    [1014, 'Bubbly Pinot Grigio'],
    [1078, 'Bubbly Rose Cuvee'],
    [1079, 'Bubbly Moscato Spumante'],
    [1285, 'Bubbly Pink Moscato'],
    [1912, 'Bubbly Prosecco'],
    [579, 'Cabernet Sauvignon'],
    [580, 'Chardonnay'],
    [1714, 'Malbec'],
    [581, 'Merlot'],
    [967, 'Moscato'],
    [1409, 'Pink Moscato'],
    [868, 'Pinot Grigio'],
    [1074, 'Pinot Noir'],
    [1953, 'Refresh Crisp Red Spritzer'],
    [1669, 'Refresh Crisp White Spritzer'],
    [1670, 'Refresh Perfectly Pink Spritzer'],
    [1667, 'Refresh Summer Red Spritzer'],
    [1668, 'Refresh Sweet White Spritzer'],
    [1016, 'Riesling'],
    [1593, 'Rich Red Blend'],
    [1314, 'Red Moscato'],
    [2102, 'Rosa Red Blend'],
    [582, 'Sauvignon Blanc'],
    [583, 'Shiraz'],
    [1155, 'Sweet Red Blend'],
    [584, 'White Zinfandel'],
    [585, 'Zinfandel'],
  ];


  constructor(private http: Http, private jsonp: Jsonp) {
  }

  getShopList(AcctGrpId: string, PrdGrpId: string, ZipCode: string,  Radius: string): Observable<ShopLocation[]> {
    const params = {
      AcctGrpId,
      PrdGrpId,
      ZipCode,
      Radius,
      callback : 'JSONP_CALLBACK'
    };
    const httpParams = new URLSearchParams();
    Object.keys(params).forEach(key => httpParams.set(key, params[key]));
    //   // https://winefinder.fbwineapps.com/WhereToBuy/GetAccounts?AcctGrpId=28&PrdGrpId=2519&ZipCode=10001&Radius=10
    return this.jsonp.get('https://winefinder.fbwineapps.com/WhereToBuy/GetAccounts', {search: httpParams}).map( (data) => {
      const response = data.json();

      const result = response.accounts.map(item => {
        const location = new ShopLocation();
        return Object.assign(location, item);
      });
      return result;
    });
}
  getVariants(): Observable<WineItem[]> {

    const params = new URLSearchParams();
    params.set('WebSiteId', '26');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get('https://winefinder.fbwineapps.com/WhereToBuy/GetWinesAndAccountGroups', {search: params}).map(response => {
      const data = response.json();

      return data.wines.map(wineData => {
        const wine = new WineItem();
        wine.id = wineData.value;
        wine.title = wineData.label;
        return wine;
      });
    });
  }

}
