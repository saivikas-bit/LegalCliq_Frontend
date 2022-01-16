import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: '<button class="btn btn-warning">I am a Button</button> <p>Dont Click this button</p>',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // message = "I am an angular project. Please implement me Fully.";
  products: Product[] = [];

  constructor() {
    this.products = [
      new Product(1, 'Tablet', 28020, 1001, 'assets/images/1.jpg'),
      new Product(1, 'Tablet', 28020, 1001, 'assets/images/1.jpg'),
      new Product(1, 'Tablet', 28020, 1001, 'assets/images/1.jpg'),
      new Product(1, 'Tablet', 28020, 1001, 'assets/images/1.jpg'),
      new Product(1, 'Tablet', 28020, 1001, 'assets/images/1.jpg'),
    ];
  }

  ngOnInit(): void {}
}
