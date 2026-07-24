import { Component, signal, inject } from '@angular/core';
import { UserService } from '../../../shared/services/user-service/user-service';
import {form, FormField} from '@angular/forms/signals';
import { loginData } from '../../../shared/types';
import { UserPageDetail } from '../user-page-detail/user-page-detail/user-page-detail';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-page',
  imports: [FormField, UserPageDetail, NgClass],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {
  private readonly userService = inject(UserService);
  readonly user = this.userService.userSignal;
  loginModel = signal<loginData>({
    email:"",
    password:""
  });
  logIn = false;

  loginForm = form(this.loginModel);

  login(){
    this.userService.
    getUser(this.loginForm.email().value(),this.loginForm.password().value())
    .subscribe();
    this.logIn = true;
  }
  
}
