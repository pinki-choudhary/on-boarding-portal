import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css']
})
export class PortalHeaderComponent implements OnInit {

  isLoggedIn = false;
  username = '';
  constructor(private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem('TOKEN') !== null) {
      this.username = 'Log out ' + localStorage.getItem('username');
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
