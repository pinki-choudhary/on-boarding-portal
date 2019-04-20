import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

/**
 * This is guard class that implements CanActivate interface.
 * It guards the login page when the user is laready logged in.
 */
export class LoginCanActivateGuard implements CanActivate {
  constructor(private router: Router, private toastrService: ToastrService) {}

  canActivate(): boolean {
    console.log(localStorage.getItem('TOKEN'));
    if (localStorage.getItem('TOKEN')) {
      this.router.navigate(['/dashboard']);
      this.toastrService.warning('You are already logged in!', 'On Boarding Portal');
      return false;
    } else {
      return true;
    }
  }
}
