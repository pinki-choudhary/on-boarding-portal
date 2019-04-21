import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

// Guard class to guard the dashboard page.
export class DashboardCanActivateGuard implements CanActivate {
  /**
   * @param router : Router
   */
  constructor(private router: Router, private toastrService: ToastrService) {}

  // method that guards the dashboard when user is not logged in.
  canActivate(): boolean {
    if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.router.navigate(['/login']);
      this.toastrService.warning('Please login to continue!', 'On Boarding Portal');
      return false;
    }
    return true;
  }
}
