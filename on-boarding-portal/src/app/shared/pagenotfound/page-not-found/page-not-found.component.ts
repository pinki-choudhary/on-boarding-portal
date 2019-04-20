import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  /**
   *
   * @param route : Router
   */
  constructor(private route: Router) { }

  ngOnInit() {
  }

  /**
   * Method that takes user to dashboard when logged in.
   * Otherwise redirectes to lgin page.
   */
  goBack(): void {
    if (localStorage.getItem('TOKEN') !== null) {
      this.route.navigate(['/dashboard/onboard']);
    } else {
      this.route.navigate(['/login']);
    }
  }

}
