import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IStudent } from '../../shared/interfaces/IStudent';
import { IUser } from '../../shared/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})

/** This is a class that implements InMemoryDbService.
 * It contains all the collections required throughout the app.
 */
export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {

    /** Default Login User data collection. */
    const login: IUser[] = [
      { id: 11, username: 'Admin', password: 'admin' },
      { id: 12, username: 'Pinki', password: 'pinki' },
      { id: 13, username: 'Arun', password: 'arun' }
    ];

    /** Default students data collection. */
    const students: IStudent[] = [
      { id: 1, name: 'Mark', category: 'International',
        documentList: [ {category: 'International', name: 'Domicile', isMandatory: true, isSubmitted: true},
                        {category: 'International', name: 'Birth Certificate', isMandatory: true, isSubmitted: true},
                        {category: 'International', name: 'Marksheets', isMandatory: true, isSubmitted: true},
                        {category: 'International', name: 'Police Clearance', isMandatory: true, isSubmitted: true},
                        {category: 'International', name: 'Passport', isMandatory: true, isSubmitted: true},
                        {category: 'International', name: 'Declaration', isMandatory: true, isSubmitted: true}],
        motherName: 'Mary', fatherName: 'William', lastScore: 67, dob: new Date('08/12/1997') },

      { id: 2, name: 'Rohan Yadav', category: 'Domestic',
        documentList: [ {category: 'Domestic', name: 'Domicile', isMandatory: true, isSubmitted: true},
                        {category: 'Domestic', name: 'Birth Certificate', isMandatory: true, isSubmitted: true},
                        {category: 'Domestic', name: 'Marksheets', isMandatory: true, isSubmitted: true},
                        {category: 'Domestic', name: 'Police Clearance', isMandatory: false, isSubmitted: true},
                        {category: 'Domestic', name: 'Passport', isMandatory: false, isSubmitted: true},
                        {category: 'Domestic', name: 'Declaration', isMandatory: true, isSubmitted: true}],
        motherName: 'Meera Yadav', fatherName: 'Rajeev Yadav', lastScore: 76, dob: new Date('06/03/1998') },

      { id: 3, name: 'Radhe Mishra', category: 'Domestic',
      documentList: [ {category: 'Domestic', name: 'Domicile', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Birth Certificate', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Marksheets', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Police Clearance', isMandatory: false, isSubmitted: false},
                      {category: 'Domestic', name: 'Passport', isMandatory: false, isSubmitted: true},
                      {category: 'Domestic', name: 'Declaration', isMandatory: true, isSubmitted: true}],
      motherName: 'Rama Mishra', fatherName: 'Pawan Mishra', lastScore: 91, dob: new Date('08/12/1995') },

      { id: 4, name: 'Joe', category: 'International',
      documentList: [ {category: 'International', name: 'Domicile', isMandatory: true, isSubmitted: true},
                      {category: 'International', name: 'Birth Certificate', isMandatory: true, isSubmitted: true},
                      {category: 'International', name: 'Marksheets', isMandatory: true, isSubmitted: true},
                      {category: 'International', name: 'Police Clearance', isMandatory: true, isSubmitted: true},
                      {category: 'International', name: 'Passport', isMandatory: true, isSubmitted: true},
                      {category: 'International', name: 'Declaration', isMandatory: true, isSubmitted: true}],
      motherName: 'Janny', fatherName: 'Will Smith', lastScore: 90, dob: new Date('08/08/1996') },

      { id: 5, name: 'Seeta', category: 'Domestic',
      documentList: [ {category: 'Domestic', name: 'Domicile', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Birth Certificate', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Marksheets', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Police Clearance', isMandatory: false, isSubmitted: false},
                      {category: 'Domestic', name: 'Passport', isMandatory: false, isSubmitted: false},
                      {category: 'Domestic', name: 'Declaration', isMandatory: true, isSubmitted: true}],
      motherName: 'Parmila', fatherName: 'Vimal', lastScore: 97, dob: new Date('06/11/1996') },

      { id: 6, name: 'Geeta', category: 'Domestic',
      documentList: [ {category: 'Domestic', name: 'Domicile', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Birth Certificate', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Marksheets', isMandatory: true, isSubmitted: true},
                      {category: 'Domestic', name: 'Police Clearance', isMandatory: false, isSubmitted: false},
                      {category: 'Domestic', name: 'Passport', isMandatory: false, isSubmitted: false},
                      {category: 'Domestic', name: 'Declaration', isMandatory: true, isSubmitted: true}],
      motherName: 'Pari', fatherName: 'Virendra', lastScore: 87, dob: new Date('06/01/1996') },
    ];

    /** Default document list data colletcion. */
    const documentlist = [{id: 1, category: 'International', name: 'Domicile', isMandatory: true, isSubmitted: false},
                          {id: 2, category: 'International', name: 'Birth Certificate', isMandatory: true, isSubmitted: false},
                          {id: 3, category: 'International', name: 'Marksheets', isMandatory: true, isSubmitted: false},
                          {id: 4, category: 'International', name: 'Police Clearance', isMandatory: true, isSubmitted: false},
                          {id: 5, category: 'International', name: 'Passport', isMandatory: true, isSubmitted: false},
                          {id: 6, category: 'International', name: 'Declaration', isMandatory: true, isSubmitted: false},

                          {id: 7, category: 'Domestic', name: 'Domicile', isMandatory: true, isSubmitted: false},
                          {id: 8, category: 'Domestic', name: 'Birth Certificate', isMandatory: true, isSubmitted: false},
                          {id: 9, category: 'Domestic', name: 'Marksheets', isMandatory: true, isSubmitted: false},
                          {id: 10, category: 'Domestic', name: 'Police Clearance', isMandatory: false, isSubmitted: false},
                          {id: 11, category: 'Domestic', name: 'Passport', isMandatory: false, isSubmitted: false},
                          {id: 12, category: 'Domestic', name: 'Declaration', isMandatory: true, isSubmitted: false}];

    return {login, students, documentlist};
  }

/** Method that generates the ids of student when not passed. */
  genId(students: IStudent[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
  }
}
