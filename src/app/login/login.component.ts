import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User[] = [];
  loginForm: FormGroup;
  submitted = false;
  error: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      // console.log('okay');
      return;
    }

    let userName = this.loginForm.value.userName;
    let password = this.loginForm.value.password;
    let loginCred = {
      userName,
      password,
    };
    // alert(JSON.stringify(loginCred, null, 4));
    let user = this.user.find((users) => users.userName == userName);
    // console.log(user);
    if (!user) {
      this.error = true;
      return;
    }
    let userP = this.user.find((users) => users.password == password);
    console.log(userP);

    if (!userP) {
      this.error = true;

      return;
    }
    this.error = false;
    localStorage.setItem('user', JSON.stringify(userP));
    this.userService.login.next(true);
    location.reload();
  }
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.user = users;
    });
  }
}
