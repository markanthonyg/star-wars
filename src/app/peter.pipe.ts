import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peter'
})
export class PeterPipe implements PipeTransform {

  transform(value: any, smiley?: string): any {
    if (!value)
      return value;

    if (!smiley)
      smiley = ':)'

    return value + ' ' + smiley;
  }

}
