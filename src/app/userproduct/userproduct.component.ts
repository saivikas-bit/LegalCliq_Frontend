import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-userproduct',
  templateUrl: './userproduct.component.html',
  styleUrls: ['./userproduct.component.css'],
})
export class UserproductComponent implements OnInit {
  productArr: Product[] = [];
  // cart: Product[] = [];
  product: Product = new Product(0, '', 0, 0, '');
  // userProduct: ca;
  currentUser: User | null = null;
  // cartItems: any;
  cartItems: any = { product: [], userId: 0 };
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private userService: UserService
  ) {
    this.productService.getProducts().subscribe((data) => {
      this.productArr = data;
      console.log(data);
      this.productService.productArr = data;
    });
  }

  addCart(product: Product) {
    // this.userService.login;
    if (localStorage.getItem('user') !== 'null') {
      this.cartItems.product.push(product);
      this.cartService
        .deleteItem(this.cartItems.id, this.cartItems)
        .subscribe((data: any) => {
          this.cartService.$itemAdded.next('shiva');
        });
    } else {
      confirm('Plese Login');
    }
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(`${localStorage.getItem('user')}`);
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data.find(
        (data) => data['userId'] === this.currentUser?.id
      );
    });
  }
}
