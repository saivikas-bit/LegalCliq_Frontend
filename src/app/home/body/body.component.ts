import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/supplier';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  productArr: Product[] = [];
  retailChainNames: string[] = [];

  supplierArr: Supplier[] = [];

  constructor() {
    // this.productArr = ['Laptop','Charger','PowerBank','Headphones','Mobile'];
    this.productArr = [
      new Product(
        1,
        'Hp Laptop 8GB,1TB',
        65000,
        101,
        'assets/images/hpyoga.jfif'
      ),
      new Product(
        2,
        'Jabra Headphones',
        8500,
        102,
        '../assets/images/jabra.jfif'
      ),
      new Product(
        3,
        'Samsung A50 Mobile',
        35000,
        103,
        '../assets/images/samsung.jfif'
      ),
      new Product(
        4,
        'Vivo y21 Mobile',
        41000,
        104,
        '../assets/images/vivo.jfif'
      ),
      new Product(5, 'LG Tv', 60000, 105, '../assets/images/Tv.jfif'),
    ];
    this.retailChainNames = [
      'Metro',
      'Super Mart',
      'Mega Mart',
      'D Mart',
      'More',
    ];

    // this.supplierArr = [
    //   new Supplier(101,101,"Apple","Bangalore","../assets/images/Apple.png"),
    //   new Supplier(102,102,"Boat","Bangalore","../assets/images/Boat.png"),
    //   new Supplier(103,103,"onePlus","Bangalore","../assets/images/oneplus.png"),
    //   new Supplier(104,104,"Realme","Bangalore","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUcxHOHYWWtCJC4EFmGXZEDODvZ3yTL4aZg&usqp=CAU"),
    //   new Supplier(105,105,"Dell","Bangalore","../assets/images/Dell.jfif"),

    // ]
  }

  ngOnInit(): void {}
}
