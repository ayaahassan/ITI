import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {

  transform(arr:string[],filter:string): unknown {
    let res:string[]=[];
   for(let i=0;i<arr.length;i++)
   {
     if(arr.includes(filter))
     {
       res.push(arr[i]);
     }
   }
    return res;
  }

}
