import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  baseUrl: string;
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };
  $itemAdded = new Subject();

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  addToCart(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(this.baseUrl + '/cartItems/', product)
      .pipe(retry(1), catchError(this.httpError));
  }
  getCartItems(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.baseUrl + '/cartItems')
      .pipe(retry(1), catchError(this.httpError));
  }
  deleteItem(id: number, cartItems: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/cartItems/' + id, cartItems);
    // .pipe(retry(1), catchError(this.httpError));
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
