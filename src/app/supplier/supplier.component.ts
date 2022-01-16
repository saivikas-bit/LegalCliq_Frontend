import { SupplierService } from './../services/supplier.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  supplierArr: Supplier[] = [];

  constructor(private supplierService: SupplierService) {
    this.supplierService.getSuppliers().subscribe((data) => {
      this.supplierArr = data;
      this.supplierService.supplierArr = data;
    });
  }

  onDelete(id: number) {
    this.supplierService.deleteSupplier(id).subscribe((data) => {
      console.log(data);
    });
    location.reload();
  }

  ngOnInit(): void {}
}
