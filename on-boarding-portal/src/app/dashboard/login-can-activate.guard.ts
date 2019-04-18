import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginCanActivateGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log(localStorage.getItem('TOKEN'));
    if (localStorage.getItem('TOKEN')) {
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}
