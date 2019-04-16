import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customMaterial'
})
export class CustomMaterialPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
