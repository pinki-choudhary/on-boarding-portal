import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryWiseStudent'
})
export class CategoryWiseStudentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
