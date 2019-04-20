import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStudent } from '../../shared/interfaces/IStudent';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentOnboardService {

  /** Url of student API */
  private studentUrl = 'api/students';

  /** Constructor that injects http client. */
  constructor(private http: HttpClient) { }

  /** GET ALL students. */
  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.studentUrl);
  }

  /** GET student by id. */
  getStudent(id: number): Observable<IStudent> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get<IStudent>(url);
  }

  /** ADD student. */
  addStudent(student: IStudent): Observable<IStudent> {
    console.log(student);
    return this.http.post<IStudent>(this.studentUrl, student, httpOptions);
  }

  /** UPDATE existing student. */
  updateStudent(student: IStudent): Observable<IStudent> {
    return this.http.put<IStudent>(this.studentUrl, student, httpOptions);
  }

  /** DELETE a student. */
  deleteStudent(id: number): Observable<IStudent> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.delete<IStudent>(url, httpOptions);
  }

}
