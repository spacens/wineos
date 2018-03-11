import {Pipe, PipeTransform} from '@angular/core';
import {WineItem} from '../../our-wines/wines.service';
import {Tag} from '../tag-list/tags.service';

@Pipe({
  name: 'winesByTags'
})
export class WinesByTagsPipe implements PipeTransform {

  transform(wineList: WineItem[] = [], selectedTags: Tag[] = []): WineItem[] {
    console.log(selectedTags);
    return wineList.filter(wine => {
      if (selectedTags.length === 0) {
        return true;
      }

      const notExistTags = selectedTags.filter(selectedTag => {
        // compare by tag id
        const isTagFound = wine.tags.some(tag => tag.id === selectedTag.id);
        return !isTagFound;
      });
      return notExistTags.length === 0; // all selected tags are present in wine

    });
  }

}
