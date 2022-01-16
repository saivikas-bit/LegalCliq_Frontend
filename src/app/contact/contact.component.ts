import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  submitted = false;
  registerForm = new FormGroup({
    title: new FormControl(''),
    fName: new FormControl(''),
    email: new FormControl(''),
    mobilenumber: new FormControl(''),
    location: new FormControl(''),
    acceptTerms: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      fName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
          ),
        ],
      ],
      mobilenumber: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // console.log(`Value submitted:${fullname.value},${email.value}`);
  }
}
