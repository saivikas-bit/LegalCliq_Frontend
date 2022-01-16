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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // registerForm: FormGroup;
  submitted = false;
  userArray: User[] = [];
  role: string = 'User';
  user: User = new User(0, '', '', '', '', '', '', false);
  registerForm = new FormGroup({
    title: new FormControl(''),
    uName: new FormControl(''),
    email: new FormControl(''),
    // role: new FormControl(''),
    pswd: new FormControl(''),
    confirmPswd: new FormControl(''),
    acceptTerms: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        uName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        // role: ['', Validators.required],
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
    // this.user = new User(0,'','','','','','',false)
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
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

    let title = this.registerForm.value.title;
    let uName = this.registerForm.value.uName;
    let email = this.registerForm.value.email;
    let role = this.role;
    //  this.registerForm.value.role;
    let pswd = this.registerForm.value.pswd;
    let confirmPswd = this.registerForm.value.confirmPswd;
    let acceptTerms = this.registerForm.value.acceptTerms;

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
    // alert(JSON.stringify(this.registerForm.value, null, 4));
    this.userService.addUser(this.user).subscribe((data) => {
      console.log(data);
      // confirm('User Added');
      this.userService
        .createUserCart({ userId: data.id, product: [] })
        .subscribe((data) => {
          alert('cart Created');
        });
    });

    // this.productService.addProduct(this.product).subscribe((data) => {
    //   console.log(data);
    // confirm('Product Added');
    this.registerForm.reset();
    // location.reload();
  }
  // console.log(tempProdArray);

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {}
}
