import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css'],
})
export class ProductupdateComponent implements OnInit {
  productArr: Product[] = [];
  product: Product;
  idUpdated: number = 0;
  productForm = new FormGroup({
    id: new FormControl(''),
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
    // this.productArr = this.productService.getProducts();
    // console.log(this.productArr[1].id).
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      pName: ['', Validators.required],
      price: ['', Validators.required],
      supplier_id: ['', Validators.required],
      img_path: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue],
    });
    this.product = new Product(0, '', 0, 0, '');

    this.productService.getProducts().subscribe((data) => {
      this.productArr = data;

      console.log(this.productArr);
    });
    // this.product = this.productService.updateProduct(3, this.product);
  }

  ngOnInit(): void {}

  // onChangeType(evt: any) {
  //   // console.log(evt.target.value);
  //   // return evt.target.value
  //   this.pId = parseInt(evt);
  //   console.log(this.pId);
  //   this.productService.getProduct(this.pId).subscribe((data) => {
  //     this.product = data;
  //     console.log(this.product);
  //   });
  //   // console.log(evt);
  //   // this.productForm.patchValue({
  //   //   pName: this.product.pName,
  //   //   price: this.product.price,
  //   //   supplier_id: this.product.supplier_id,
  //   //   img_path: this.product.img_path,
  //   // });
  //   console.log('After Service Call');
  //   this.productForm.get('pName')?.setValue(this.product.pName);
  // }
  get f() {
    return this.productForm.controls;
  }
  onChangeType(evt: any, evtValue: any) {
    console.log(evt);
    let idObtained = evt;
    this.idUpdated = parseInt(idObtained);
    console.log(this.idUpdated);
    for (var i = 0; i < this.productArr.length; i++) {
      if (this.idUpdated == this.productArr[i].id) {
        this.product = this.productArr[i];
      }
    }
    console.log(this.product);
    this.productForm.get('pName')?.setValue(this.product.pName);
    this.productForm.get('price')?.setValue(this.product.price);
    this.productForm.get('supplier_id')?.setValue(this.product.supplier_id);
    this.productForm.get('img_path')?.setValue(this.product.img_path);
  }
  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
    this.product = new Product(
      this.productForm.value.id,
      this.productForm.value.pName,
      this.productForm.value.price,
      this.productForm.value.supplier_id,
      this.productForm.value.img_path
    );
    this.productService
      .updateProduct(this.idUpdated, this.product)
      .subscribe((data) => {
        console.log(data);
        confirm('Product Updated');
      });
    this.productForm.reset();
    location.reload();
  }
}
