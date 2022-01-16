import { User } from './../models/user';
import { CanActivate } from '@angular/router';

export class AdminGuard implements CanActivate {
  currentUser: User | null = JSON.parse(`${localStorage.getItem('user')}`);
  // role = 'Admin';
  canActivate() {
    if (this.currentUser?.role == 'Admin') {
      return true;
    } else {
      confirm('You are not an Admin to access this page');
      return false;
    }
  }
}
