import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter',
})
export class SorterPipe implements PipeTransform {
  transform(value: any[] | null, key: string): any[] | null{
    if (!Array.isArray(value) || !key) return value;

    return value.sort((a, b) =>
      typeof a[key] === 'number' && typeof b[key] === 'number'
        ? a[key] - b[key]
        : ('' + a[key]).toLowerCase().localeCompare(('' + b[key]).toLowerCase())
    );
  }
}
