import { SupplierService } from './../services/supplier.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-supplieradd',
  templateUrl: './supplieradd.component.html',
  styleUrls: ['./supplieradd.component.css'],
})
export class SupplieraddComponent implements OnInit {
  supplierArr: Supplier[] = [];
  supplier: Supplier = new Supplier(0, 0, '', '', '');
  supplierForm = new FormGroup({
    sName: new FormControl(''),
    sLocation: new FormControl(''),
    supplier_id: new FormControl(''),
    logo_img: new FormControl(''),
  });
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService
  ) {
    this.supplierForm = this.formBuilder.group({
      sName: ['', Validators.required],
      sLocation: ['', Validators.required],
      supplier_id: ['', Validators.required],
      logo_img: ['', Validators.required],
    });
    this.supplierService.getSuppliers().subscribe((data) => {
      this.supplierArr = data;
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.supplierForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.supplierForm.invalid) {
      return;
    }
    let tempId = 0;
    let maxId = 0;
    this.supplierArr.forEach((s) => {
      if (maxId < s.id) {
        maxId = s.id;
      }
      tempId = maxId;
    });
    tempId = tempId + 1;
    let sN = this.supplierForm.value.sName;
    let sL = this.supplierForm.value.sLocation;
    let supID = this.supplierForm.value.supplier_id;
    let logo_img = this.supplierForm.value.logo_img;
    this.supplier = new Supplier(tempId, supID, sN, sL, logo_img);
    this.supplierService.addSupplier(this.supplier).subscribe((data) => {
      console.log(data);
      confirm('Supplier Added');
    });

    this.supplierForm.reset();
    location.reload();
  }
}
