import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css'],
})
export class UseraddComponent implements OnInit {
  userArray: User[] = [];
  user: User = new User(0, '', '', '', '', '', '', false);
  userForm = new FormGroup({
    title: new FormControl(''),
    uName: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    pswd: new FormControl(''),
    confirmPswd: new FormControl(''),
    acceptTerms: new FormControl(''),
  });
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        uName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required],
        // dob: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.pattern(
        //       /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        //     ),
        //   ],
        // ],
        pswd: ['', [Validators.required, Validators.minLength(6)]],
        confirmPswd: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validator: MustMatch('pswd', 'confirmPswd'),
      }
    );

    this.userService.getUsers().subscribe((data) => {
      this.userArray = data;
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    let tempId = 0;
    let maxId = 0;
    this.userArray.forEach((u) => {
      if (maxId < u.id) {
        maxId = u.id;
      }
      tempId = maxId;
    });
    tempId = tempId + 1;
    let title = this.userForm.value.title;
    let uName = this.userForm.value.uName;
    let email = this.userForm.value.email;
    let role = this.userForm.value.role;
    let pswd = this.userForm.value.pswd;
    let confirmPswd = this.userForm.value.confirmPswd;
    let acceptTerms = this.userForm.value.acceptTerms;
    this.user = new User(
      tempId,
      title,
      uName,
      email,
      role,
      pswd,
      confirmPswd,
      acceptTerms
    );
    this.userService.addUser(this.user).subscribe((data) => {
      console.log(data);
      confirm('User Added');
    });

    this.userForm.reset();
    location.reload();
  }
}
