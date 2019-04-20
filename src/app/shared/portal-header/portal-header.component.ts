import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css']
})
export class PortalHeaderComponent implements OnInit {

  // variable to check user is logged in or not.
  isLoggedIn = false;

  // variable that holds user name.
  username = '';
  constructor(private route: Router) { }

  /**
   * sets the user name on the header.
   */
  ngOnInit() {
    if (localStorage.getItem('TOKEN') !== null) {
      this.username = 'Log out ' + localStorage.getItem('username');
      this.isLoggedIn = true;
    }
  }

  /**
   * Method that logout the user from the portal.
   */
  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
