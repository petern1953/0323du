import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[] | null, filterBy: string, filterKey: string): any[] | null {
    if (!Array.isArray(arr) || !filterBy || !filterKey)
      return arr;

    filterBy = ('' + filterBy).toLowerCase();
    console.log(filterBy, filterKey);

    return arr.filter((item) =>
      ('' + item[filterKey]).toLowerCase().includes(filterBy)
    );
  }

}
