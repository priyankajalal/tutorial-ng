import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSize'
})

export class CustomSizePipe implements PipeTransform {

  transform(size: number, extension: string = 'MB'): string {
    return ` ${(size/(1024*1024)).toFixed(2) } ${extension} is ${extension}`
    //return (size/(1024*1024)).toFixed(2) + " "+extension;
  }

}
