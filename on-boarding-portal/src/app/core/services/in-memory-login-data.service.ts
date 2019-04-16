import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IStudent } from '../../shared/interfaces/IStudent';
import { IUser } from '../../shared/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {
    const login: IUser[] = [
      { id: 11, username: 'Admin', password: 'admin' },
      { id: 12, username: 'Pinki', password: 'pinki' },
      { id: 13, username: 'Arun', password: 'arun' }
    ];

    const students: IStudent[] = [
      { id: 1, name: 'Mark', type: 'International',
        documentList: [ {name: 'domicile', isMandatory: true, isSubmitted: true},
                        {name: 'birth_certificate', isMandatory: true, isSubmitted: true},
                        {name: 'marksheets', isMandatory: true, isSubmitted: true},
                        {name: 'police_clearance', isMandatory: true, isSubmitted: true},
                        {name: 'passport', isMandatory: true, isSubmitted: true},
                        {name: 'declaration', isMandatory: true, isSubmitted: true}],
        mother_name: 'Mary', father_name: 'William', last_class_score: 67, dob: '08/12/1997' },

      { id: 2, name: 'Rohan Yadav', type: 'Domestic',
        documentList: [ {name: 'domicile', isMandatory: true, isSubmitted: true},
                        {name: 'birth_certificate', isMandatory: true, isSubmitted: true},
                        {name: 'marksheets', isMandatory: true, isSubmitted: true},
                        {name: 'police_clearance', isMandatory: false, isSubmitted: true},
                        {name: 'passport', isMandatory: false, isSubmitted: true},
                        {name: 'declaration', isMandatory: true, isSubmitted: true}],
        mother_name: 'Meera Yadav', father_name: 'Rajeev Yadav', last_class_score: 76, dob: '06/03/1998' },

      { id: 3, name: 'Radhe Mishra', type: 'Domestic',
      documentList: [ {name: 'domicile', isMandatory: true, isSubmitted: true},
                      {name: 'birth_certificate', isMandatory: true, isSubmitted: true},
                      {name: 'marksheets', isMandatory: true, isSubmitted: true},
                      {name: 'police_clearance', isMandatory: false, isSubmitted: false},
                      {name: 'passport', isMandatory: false, isSubmitted: true},
                      {name: 'declaration', isMandatory: true, isSubmitted: true}],
      mother_name: 'Rama Mishra', father_name: 'Pawan Mishra', last_class_score: 91, dob: '08/12/1995' },

      { id: 4, name: 'Joe', type: 'International',
      documentList: [ {name: 'domicile', isMandatory: true, isSubmitted: true},
                      {name: 'birth_certificate', isMandatory: true, isSubmitted: true},
                      {name: 'marksheets', isMandatory: true, isSubmitted: true},
                      {name: 'police_clearance', isMandatory: true, isSubmitted: true},
                      {name: 'passport', isMandatory: true, isSubmitted: true},
                      {name: 'declaration', isMandatory: true, isSubmitted: true}],
      mother_name: 'Janny', father_name: 'Will Smith', last_class_score: 90, dob: '08/08/1996' },

      { id: 5, name: 'Seeta', type: 'Domestic',
      documentList: [ {name: 'domicile', isMandatory: true, isSubmitted: true},
                      {name: 'birth_certificate', isMandatory: true, isSubmitted: true},
                      {name: 'marksheets', isMandatory: true, isSubmitted: true},
                      {name: 'police_clearance', isMandatory: false, isSubmitted: false},
                      {name: 'passport', isMandatory: false, isSubmitted: false},
                      {name: 'declaration', isMandatory: true, isSubmitted: true}],
      mother_name: 'Parmila', father_name: 'Vimal', last_class_score: 97, dob: '06/11/1996' },
    ];
    return {login, students};
  }

  genId(students: IStudent[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
  }
}
