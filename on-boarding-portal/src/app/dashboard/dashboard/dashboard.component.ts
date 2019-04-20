import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

/** Dashboard component class. */
export class DashboardComponent implements OnInit {

  /** array of nav bar on dashboard page. */
  navLinks: any[];

  /** Constructor that injects router. */
  constructor(private router: Router) {
}
  ngOnInit() {

    /** array of nav bar links on component load.  */
    this.navLinks = [
      {
          label: 'On Board',
          link: 'onboard',
          index: 0
      }, {
          label: 'Student List',
          link: 'studentlist',
          index: 1
      }
  ];
    }
}
