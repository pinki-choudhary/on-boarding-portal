import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../core/services/login.service';
import { IUser } from '../../shared/interfaces/IUser';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }
  hide = true;

  getErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
        this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
            '';
  }

  ngOnInit() {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
  }

  login(myform: IUser) {
    if (this.loginService.validateUser(myform)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('username', myform.username);
      this.route.navigate(['/dashboard']);
    } else {
      alert('Enter valid credentials');
    }

  }

  resetForm() {
    this.loginForm.reset();
  }

}
