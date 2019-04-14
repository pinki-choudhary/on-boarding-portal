import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    if (localStorage.getItem('TOKEN') !== null) {
      this.route.navigate(['/dashboard/onboard']);
    } else {
      this.route.navigate(['/login']);
    }
  }

}
