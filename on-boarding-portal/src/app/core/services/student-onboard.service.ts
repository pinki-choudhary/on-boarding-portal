import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStudent } from '../../shared/interfaces/IStudent';
import { Observable, of} from 'rxjs';
import { catchError  } from 'rxjs/operators';

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
    return this.http.get<IStudent[]>(this.studentUrl).pipe(
      catchError(this.handleError<IStudent[]>('getHeroes', null))
    );
  }

  /** GET student by id. */
  getStudent(id: number): Observable<IStudent> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get<IStudent>(url).pipe(
      catchError(this.handleError<IStudent>('getHeroes', null))
    );
  }

  /** ADD student. */
  addStudent(student: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this.studentUrl, student, httpOptions).pipe(
      catchError(this.handleError<IStudent>('getHeroes', null))
    );
  }

  /** UPDATE existing student. */
  updateStudent(student: IStudent): Observable<IStudent> {
    return this.http.put<IStudent>(this.studentUrl, student, httpOptions).pipe(
      catchError(this.handleError<IStudent>('getHeroes', null))
    );
  }

  /** DELETE a student. */
  deleteStudent(id: number): Observable<IStudent> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.delete<IStudent>(url, httpOptions).pipe(
      catchError(this.handleError<IStudent>('getHeroes', null))
    );
  }

  /** HTTP Error Handler */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
