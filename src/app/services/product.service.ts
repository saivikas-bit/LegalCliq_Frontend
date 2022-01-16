import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productArr: Product[] = [];
  baseUrl: string;
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
    // this.productArr = [ new Product(1,'Laptop',125000,101,'assets/images/mac book pro.jfif'),
    // new Product(2,'BoAt Rockerz 550',5000,102,'../assets/images/boat.jfif'),
    // new Product(3,'One plus 7S 5G',45000,103,'../assets/images/oneplus.jfif'),
    // new Product(4,'Realme GT 5G',41000,104,'../assets/images/realmeGT.jfif'),
    // new Product(5,'Airdopes',2000,105,'../assets/images/airdopes.jfif')]
  }

  //  getProducts(){
  //    return this.productArr
  //  }

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.baseUrl + '/products')
      .pipe(retry(1), catchError(this.httpError));
  }

  getProduct(pId: number): Observable<Product> {
    return this.httpClient
      .get<Product>(this.baseUrl + '/products/' + pId)
      .pipe(retry(1), catchError(this.httpError));
    // let product = this.productArr.find((pr) => pr.id === pId);
    // return product || new Product(0, '', 0, 0, '');
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(
        this.baseUrl + '/products',
        JSON.stringify(product),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
    // this.productArr.push(product);
    // return this.productArr;
  }
  updateProduct(pId: number, product: Product): Observable<Product> {
    return this.httpClient
      .put<Product>(this.baseUrl + `/products/${pId}`, product)
      .pipe(retry(1), catchError(this.httpError));
    // let products = this.productArr.findIndex((pr) => pr.id === pId);
    // this.productArr[products] = product;
    // return product || new Product(0, '', 0, 0, '');

    // var flag = 0;
    // var pos = -1;
    // for (var i = 0; i < this.productArr.length; i++) {
    //   if (pId == this.productArr[i].id) {
    //     flag = 1;
    //     pos = i;

    //     break;
    //   }
    // }
    // if (flag == 1) {
    //   this.productArr[pos] = product;
    //   return this.productArr[pos];
    // } else {
    //   return new Product(0, '', 0, 0, '');
    // }
  }

  deleteProduct(pId: number) {
    return this.httpClient.delete(this.baseUrl + '/products/' + pId, {
      body: { foo: 'bar' },
    });

    // let delproduct = this.productArr.filter((pr) => pr.id === pId);
    // return delproduct || new Product(0, '', 0, 0, '');
    // var flag = 0;
    // var pos = -1;
    // for (var i = 0; i < this.productArr.length; i++) {
    //   if (pId == this.productArr[i].id) {
    //     flag = 1;
    //     pos = i;
    //     break;
    //   }
    // }
    // if (flag == 1) {
    //   var del = this.productArr.slice(pos);
    //   console.log(del);
    //   return this.productArr[pos];
    // } else {
    //   return new Product(0, '', 0, 0, '');
    // }
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

// var flag=0;
//     var pos=-1;
//     for(var i=0;i<this.productArr.length;i++){
//       if(pId == this.productArr[i].id){
//         flag=1
//         pos=i

//         break
//       }
//     }
//     if(flag==1){
//       this.productArr.pop()
//       return this.productArr[pos]
//       console.log(this.productArr)
//     }
//     else{
//       return new Product (0,'',0,0,'')
//     }
