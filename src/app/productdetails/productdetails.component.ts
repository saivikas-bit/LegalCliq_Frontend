import { ProductService } from './../services/product.service';
import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  product: Product;
  // product: Product = new Product(0, '', 0, 0, '');
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.product = new Product(0, '', 0, 0, '');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.productService.getProduct(id).subscribe((data) => {
        this.product = data;
      });
    });
  }
}
