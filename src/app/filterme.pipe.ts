import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterme'
})
export class FiltermePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      let ctrl = Object.keys(it)[0];
      return it[ctrl].toLocaleLowerCase().includes(searchText);
    });
  }

}
