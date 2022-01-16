import { SupplierService } from './../services/supplier.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-supplierdeatils',
  templateUrl: './supplierdeatils.component.html',
  styleUrls: ['./supplierdeatils.component.css'],
})
export class SupplierdeatilsComponent implements OnInit {
  supplier: Supplier = new Supplier(0, 0, '', '', '');
  constructor(
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.supplier= this.supplierService.getSupplier(104)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.supplierService.getSupplier(id).subscribe((data) => {
        this.supplier = data;
      });
    });
  }
}
