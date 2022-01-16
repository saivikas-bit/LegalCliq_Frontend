import { ProductService } from './../services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // @Input() retailChainNames :string;

  productArr: Product[] = [];
  // msg: string = 'Hello Guys';

  constructor(private productService: ProductService) {
    // this.retailChainNames = "";
    // this.productArr = this.productService.getProducts()
    // console.log('constructor');
  }
  onFireEvent(msg: string) {
    console.log(`Recieved a message from inner component ${msg}`);
  }

  // ngAfterContentInit(): void {
  //   this.msg = 'Hello Friends';
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroyed');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngChanges');
  // }

  ngOnInit(): void {
    // console.log('ngOnInit');
    this.productService.getProducts().subscribe((data) => {
      this.productArr = data;
      console.log(data);
      this.productService.productArr = data;
    });
  }
  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe((data) => {
      console.log(data);
    });

    // location.reload();
  }
}
