import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userArray: User[] = [];
  constructor(private UserService: UserService) {
    this.UserService.getUsers().subscribe((data) => {
      this.userArray = data;
      this.UserService.userArray = data;
    });
  }
  onDelete(id: number) {
    this.UserService.deleteUser(id).subscribe((data) => {
      console.log(data);
      confirm('User' + `${id}` + 'Deleted');
    });
    location.reload();
  }

  ngOnInit(): void {}
}
