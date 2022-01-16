import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.user = new User(0, '', '', '', '', '', '', false);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.userService.getUser(id).subscribe((data) => {
        this.user = data;
      });
    });
  }
}
