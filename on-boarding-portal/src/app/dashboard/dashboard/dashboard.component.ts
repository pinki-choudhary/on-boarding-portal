import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
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
}  ngOnInit() {
  }

}
