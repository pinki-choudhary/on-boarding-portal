import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../interfaces/IStudent';

@Pipe({
  name: 'search'
})

/**
 * Pipe used for searching students by their names.
 */
export class SearchPipe implements PipeTransform {

  transform(students: IStudent[], searchName: string): IStudent[] {
    if (!students || !searchName) {
      return students;
    }
    return students.filter(student => student.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()));
  }
}
