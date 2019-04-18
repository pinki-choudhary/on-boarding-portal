import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardCanActivateGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log(localStorage.getItem('TOKEN'));
    if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
