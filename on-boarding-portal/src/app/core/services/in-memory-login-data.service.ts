import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IStudent } from 'src/app/shared/interfaces/IStudent';

@Injectable({
  providedIn: 'root'
})
export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {
    const login = [
      { id: 11, username: 'Admin', password: 'admin' },
      { id: 12, username: 'Pinki', password: 'pinki' },
      { id: 13, username: 'Arun', password: 'arun' }
    ];

    const students = [
      { id: 1, name: 'Mark', type: 'International', domicile: true, birth_certificate: true, marksheets: true, police_clearance: true,
        passport: true, signed_declaration: true, mother_name: 'Mary', father_name: 'William', last_class_score: 67,
        dob: new Date('08/12/97') },

      { id: 2, name: 'Rohan Yadav', type: 'Domestic', domicile: true, birth_certificate: true, marksheets: true, police_clearance: false,
        passport: true, signed_declaration: true, mother_name: 'Meera Yadav', father_name: 'Rajeev Yadav', last_class_score: 76,
        dob: new Date('06/03/98') },

      { id: 3, name: 'Radhe Mishra', type: 'Domestic', domicile: true, birth_certificate: true, marksheets: true, police_clearance: false,
        passport: false, signed_declaration: true, mother_name: 'Rama Mishra', father_name: 'Pawan Mishra', last_class_score: 91,
        dob: new Date('08/12/95') },

      { id: 4, name: 'Joe', type: 'International', domicile: true, birth_certificate: true, marksheets: true, police_clearance: true,
        passport: true, signed_declaration: true, mother_name: 'Janny', father_name: 'Will Smith', last_class_score: 90,
        dob: new Date('08/08/96') },

      { id: 5, name: 'Seeta', type: 'Domestic', domicile: true, birth_certificate: true, marksheets: true, police_clearance: false,
        passport: false, signed_declaration: true, mother_name: 'Parmila', father_name: 'Vimal', last_class_score: 97,
        dob: new Date('06/11/96') },
    ];
    return {login, students};
  }

  genId(students: IStudent[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
  }
}
