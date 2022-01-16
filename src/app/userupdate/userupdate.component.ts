import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css'],
})
export class UserupdateComponent implements OnInit {
  userArray: User[] = [];
  user: User;
  idUpdated: number = 0;
  submitted = false;

  // userForm = new FormGroup({
  //   id: new FormControl(),
  //   uName: new FormControl(''),
  //   pswd: new FormControl(''),
  //   role: new FormControl(''),
  //   email: new FormControl(''),
  // });
  userForm = new FormGroup({
    title: new FormControl(''),
    uName: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    pswd: new FormControl(''),
    confirmPswd: new FormControl(''),
    acceptTerms: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group(
      {
        id: ['', Validators.required],
        title: ['', Validators.required],
        uName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required],
        pswd: ['', [Validators.required, Validators.minLength(6)]],
        confirmPswd: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validator: MustMatch('pswd', 'confirmPswd'),
      }
    );
    this.user = new User(0, '', '', '', '', '', '', false);

    this.userService.getUsers().subscribe((data) => {
      this.userArray = data;
      // this.userService.userArray = data;
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.userForm.controls;
  }
  onChangeType(evt: any, evtValue: any) {
    let idObtained = evt;
    console.log(evt);
    this.idUpdated = parseInt(idObtained);
    for (let i = 0; i < this.userArray.length; i++) {
      if (this.idUpdated == this.userArray[i].id) {
        this.user = this.userArray[i];
      }
    }
    this.userForm.get('title')?.setValue(this.user.title);
    this.userForm.get('uName')?.setValue(this.user.userName);
    this.userForm.get('email')?.setValue(this.user.email);
    this.userForm.get('role')?.setValue(this.user.role);
    this.userForm.get('pswd')?.setValue(this.user.password);
    this.userForm.get('confirmPswd')?.setValue(this.user.confirmPassword);
    this.userForm.get('acceptTerms')?.setValue(this.user.AcceptTerms);
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.user = new User(
      this.userForm.value.id,
      this.userForm.value.title,
      this.userForm.value.uName,
      this.userForm.value.email,
      this.userForm.value.role,
      this.userForm.value.pswd,
      this.userForm.value.ConfirmPswd,
      this.userForm.value.AcceptTerms
    );

    this.userService
      .updateUser(this.userForm.value.id, this.user)
      .subscribe((data) => {
        console.log(data);
        confirm('User Updated');
      });
    this.userForm.reset();
    location.reload();
  }
}
