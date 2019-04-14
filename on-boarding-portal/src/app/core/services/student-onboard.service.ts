import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../../shared/interfaces/IStudent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentOnboardService {

  private studentUrl = 'api/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.studentUrl);
  }

}
