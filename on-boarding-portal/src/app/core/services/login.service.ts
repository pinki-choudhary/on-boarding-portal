import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginData: IUser[];

  private loginUrl = 'api/login';  // URL to web api

  constructor(private http: HttpClient) {
    this.getUsers().subscribe(data => this.loginData = data);
   }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.loginUrl);
  }

  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }
}
