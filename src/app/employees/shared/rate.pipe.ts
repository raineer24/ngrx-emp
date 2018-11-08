import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(value) {
      var regex = /(\d+)/g;
      Number(value.match(regex)[0]);
      return value;
    }
    return '%' + 0.01;
    
    
  }

}
