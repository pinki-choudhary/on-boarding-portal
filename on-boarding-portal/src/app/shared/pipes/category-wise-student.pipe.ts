import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../interfaces/IStudent';

@Pipe({
  name: 'categoryWiseStudent'
})

/**
 * Pipe that displays students accoridng to category selected.
 */
export class CategoryWiseStudentPipe implements PipeTransform {

  transform(students: IStudent[], categorySelected: string): IStudent[] {
    if (!students || !categorySelected || categorySelected === 'All') {
      return students;
    }
    return students.filter(student => student.category.toLocaleLowerCase().includes(categorySelected.toLocaleLowerCase()));
  }

}
