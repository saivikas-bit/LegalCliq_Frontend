import { SupplierService } from './../services/supplier.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-supplierupdate',
  templateUrl: './supplierupdate.component.html',
  styleUrls: ['./supplierupdate.component.css'],
})
export class SupplierupdateComponent implements OnInit {
  supplierArr: Supplier[] = [];
  supplier: Supplier;
  idUpdated: number = 0;
  submitted = false;

  supplierForm = new FormGroup({
    id: new FormControl(),
    sName: new FormControl(''),
    sLocation: new FormControl(''),
    supplier_id: new FormControl(''),
    logo_img: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService
  ) {
    this.supplierForm = this.formBuilder.group({
      id: ['', Validators.required],
      sName: ['', Validators.required],
      sLocation: ['', Validators.required],
      supplier_id: ['', Validators.required],
      logo_img: ['', Validators.required],
    });
    this.supplier = new Supplier(0, 0, '', '', '');
    this.supplierService.getSuppliers().subscribe((data) => {
      this.supplierArr = data;
      this.supplierService.supplierArr = data;
    });
    // console.log(this.supplierArr);
  }

  ngOnInit(): void {}

  // onChangeType(evt: any) {
  //   // console.log(evt.target.value)
  //   // return evt.target.value
  //   let tempArr = this.supplierService.getSupplier(evt).subscribe((data) => {
  //     this.supplier = data;
  //   });
  //   console.log(evt);
  //   console.log(tempArr);
  //   this.supplierForm.patchValue({
  //     sName: this.supplier.sName,
  //     sLocation: this.supplier.sLocation,
  //     supplier_id: this.supplier.supplier_id,
  //     logo_img: this.supplier.logo,
  //   });
  // }
  get f() {
    return this.supplierForm.controls;
  }
  onChangeType(evt: any, evtValue: any) {
    let idObtained = evt;
    this.idUpdated = parseInt(idObtained);
    for (let i = 0; i < this.supplierArr.length; i++) {
      if (this.idUpdated == this.supplierArr[i].id) {
        this.supplier = this.supplierArr[i];
      }
    }
    this.supplierForm.get('sName')?.setValue(this.supplier.sName);
    this.supplierForm.get('sLocation')?.setValue(this.supplier.sLocation);
    this.supplierForm.get('supplier_id')?.setValue(this.supplier.supplier_id);
    this.supplierForm.get('logo_img')?.setValue(this.supplier.logo);
  }
  onSubmit() {
    this.submitted = true;
    if (this.supplierForm.invalid) {
      return;
    }
    this.supplier = new Supplier(
      this.supplierForm.value.id,
      this.supplierForm.value.supplier_id,
      this.supplierForm.value.sName,
      this.supplierForm.value.sLocation,
      this.supplierForm.value.logo_img
    );
    this.supplierService
      .updateSupplier(this.supplierForm.value.id, this.supplier)
      .subscribe((data) => {
        console.log(data);
        confirm('Supplier Updated');
      });
    this.supplierForm.reset();
    location.reload();
  }
}
