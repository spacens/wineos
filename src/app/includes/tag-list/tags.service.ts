import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {WinesService} from '../../our-wines/wines.service';

export class Tag {
  id: number;
  title: string;
  selected = false;

  fillFromWineResponse(item: any): Tag {
    this.id = parseInt(item.id, 0);
    this.title = item.title;
    return this;
  }

}

@Injectable()
export class TagsService {

  constructor(private winesService: WinesService) {
  }

  getTagList(): Observable<Tag[]> {
    return this.winesService.getWineTags();
  }

}
