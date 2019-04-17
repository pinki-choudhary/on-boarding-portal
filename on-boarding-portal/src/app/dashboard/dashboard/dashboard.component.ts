import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navLinks: any[];
  constructor(private router: Router) {
}
  ngOnInit() {
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
