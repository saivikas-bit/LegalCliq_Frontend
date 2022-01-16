import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  supplierArr: Supplier[] = [];
  baseUrl: string;
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  getSuppliers(): Observable<Supplier[]> {
    // return this.supplierArr;
    return this.httpClient
      .get<Supplier[]>(this.baseUrl + '/suppliers')
      .pipe(retry(1), catchError(this.httpError));
  }

  getSupplier(sId: number): Observable<Supplier> {
    return this.httpClient
      .get<Supplier>(this.baseUrl + '/suppliers/' + sId)
      .pipe(retry(1), catchError(this.httpError));

    // var flag = 0;
    // var pos = -1;
    // for (var i = 0; i < this.supplierArr.length; i++) {
    //   if (supplier_id == this.supplierArr[i].id) {
    //     flag = 1;
    //     pos = i;
    //     break;
    //   }
    // }
    // if (flag == 1) {
    //   return this.supplierArr[pos];
    // } else {
    //   return new Supplier(0, 0, '', '', '');
    // }
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    // this.supplierArr.push(supplier);
    // return this.supplierArr;
    return this.httpClient
      .post<Supplier>(
        this.baseUrl + '/suppliers',
        JSON.stringify(supplier),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }

  updateSupplier(sId: number, supplier: Supplier): Observable<Supplier> {
    return this.httpClient
      .put<Supplier>(this.baseUrl + '/suppliers/' + sId, supplier)
      .pipe(retry(1), catchError(this.httpError));
    // var flag = 0;
    // var pos = -1;
    // for (var i = 0; i < this.supplierArr.length; i++) {
    //   if (sId == this.supplierArr[i].id) {
    //     flag = 1;
    //     pos = i;

    //     break;
    //   }
    // }
    // if (flag == 1) {
    //   this.supplierArr[pos] = supplier;
    //   return this.supplierArr[pos];
    // } else {
    //   return new Supplier(0, 0, '', '', '');
    // }
  }

  deleteSupplier(sId: number): Observable<Supplier> {
    return this.httpClient
      .delete<Supplier>(this.baseUrl + `/suppliers/${sId}`)
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
