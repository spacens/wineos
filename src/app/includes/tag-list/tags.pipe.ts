import { Pipe, PipeTransform } from '@angular/core';
import {Tag} from './tags.service';

@Pipe({
  name: 'tagsSelected',
  pure: false
})
export class TagsPipe implements PipeTransform {

  transform(value: Tag[], args?: any): any {
    return value.filter(item => item.selected);
  }

}
