import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService {

  /** Array of login user data. */
  private loginData: IUser[];

  /** Url of login API */
  private loginUrl = 'api/login';

  /** Constructor that injects http client. */
  constructor(private http: HttpClient) {
    this.getUsers().subscribe(data => this.loginData = data);
   }

  /** Method to get all login user data. */
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.loginUrl);
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }
}
