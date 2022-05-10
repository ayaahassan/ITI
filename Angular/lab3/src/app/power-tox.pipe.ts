import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTox'
})
export class PowerToxPipe implements PipeTransform {

  transform(value: number,y:number): unknown {
    return Math.pow(value,y);
  }

}
