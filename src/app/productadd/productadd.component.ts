import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css'],
})
export class ProductaddComponent implements OnInit {
  productArr: Product[] = [];
  product: Product = new Product(0, '', 0, 0, '');

  productForm = new FormGroup({
    pName: new FormControl(''),
    price: new FormControl(''),
    supplier_id: new FormControl(''),
    img_path: new FormControl(''),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      pName: ['', Validators.required],
      price: ['', Validators.required],
      supplier_id: ['', Validators.required],
      img_path: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue],
    });

    this.productService.getProducts().subscribe((data) => {
      this.productArr = data;
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.productForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
    let tempId = 0;
    let maxId = 0;
    console.log('method');
    this.productArr.forEach((p) => {
      if (maxId < p.id) {
        maxId = p.id;
      }
      tempId = maxId;
    });
    tempId = tempId + 1;
    let pN = this.productForm.value.pName;
    let pr = this.productForm.value.price;
    let psupID = this.productForm.value.supplier_id;
    let pImgPath = this.productForm.value.img_path;
    this.product = new Product(tempId, pN, pr, psupID, pImgPath);
    // alert(JSON.stringify(this.productForm.value, null, 4));
    this.productService.addProduct(this.product).subscribe((data) => {
      console.log(data);
      confirm('Product Added');
    });
    // console.log(tempProdArray);
    this.productForm.reset();
    location.reload();
  }
}
