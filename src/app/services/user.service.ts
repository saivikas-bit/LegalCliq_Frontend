import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userArray: User[] = [];
  baseUrl: string;
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  login = new Subject();

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
    // this.userArray = [
    //   new User(1, 'shiva', 'shiva123', 'Admin', 'shivaputra050699@gmail.com'),
    //   new User(2, 'vikas', 'vikas123', 'User', 'vikas12345@gmail.com'),
    // ];
  }

  getUsers(): Observable<User[]> {
    //  return this.userArray
    return this.httpClient
      .get<User[]>(this.baseUrl + '/users')
      .pipe(retry(1), catchError(this.httpError));
  }
  getUser(uId: number): Observable<User> {
    return this.httpClient
      .get<User>(this.baseUrl + '/users/' + uId)
      .pipe(retry(1), catchError(this.httpError));

    // var flag = 0;
    // var pos = -1;
    // for (var i = 0; i < this.userArray.length; i++) {
    //   if (uId == this.userArray[i].id) {
    //     flag = 1;
    //     pos = i;
    //     break;
    //   }
    // }
    // if (flag == 1) {
    //   return this.userArray[pos];
    // } else {
    //   return new User(0, '', '', '', '');
    // }
  }

  createUserCart(cart: any) {
    return this.httpClient.post(this.baseUrl + '/cartItems', cart);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      this.baseUrl + '/users',
      JSON.stringify(user),
      this.httpHeader
    );
    // this.userArray.push(user);
    // return this.userArray;
  }

  updateUser(uId: number, user: User): Observable<User> {
    return this.httpClient
      .put<User>(this.baseUrl + '/users/' + uId, user)
      .pipe(retry(1), catchError(this.httpError));
    // var flag = 0;
    // var pos = -1;
    // for (var i = 0; i < this.userArray.length; i++) {
    //   if (uId == this.userArray[i].id) {
    //     flag = 1;
    //     pos = i;

    //     break;
    //   }
    // }
    // if (flag == 1) {
    //   this.userArray[pos] = user;
    //   return this.userArray[pos];
    // } else {
    //   return new User(0, '', '', '', '');
    // }
  }

  deleteUser(uId: number): Observable<User> {
    return this.httpClient
      .delete<User>(this.baseUrl + `/users/${uId}`)
      .pipe(retry(1), catchError(this.httpError));
  }

  httpError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code:${error.status}\nMessage:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
