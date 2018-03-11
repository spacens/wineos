import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// Compiler complains if this isnt included.
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeneralService {

    constructor( private http: Http ) {}

    public fetchData(config: any, url: any) {
        // Remove first forward slash from string
        const cleanURL = url.slice(1);
        // Fetch content from drupal
        return this.http.get(config.Drupal.Endpoint + cleanURL + '?_format=json').map(
            (res) => res.json()
        );
    }
}
