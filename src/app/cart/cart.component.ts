import { Product } from './../models/product';
import { CartService } from './../services/cart.service';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../models/user';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any = { product: [], userId: 0 };
  currentUser: User | null = null;
  totalAmount: number = 0;
  constructor(private cartService: CartService, public dialog: MatDialog) {}

  deleteItem(id: number) {
    this.cartItems.product = this.cartItems.product.filter(
      (product: any) => product.id !== id
    );
    this.cartService
      .deleteItem(this.cartItems.id, this.cartItems)
      .subscribe((data) => {
        confirm('Item Deleted :' + `${id}`);
      });
    console.log(this.cartItems);
    location.reload();
    // this.cartService.$itemAdded.next(true);
  }

  total() {
    let total = 0;
    for (let item of this.cartItems.product) {
      total = total + +item.price;
    }
    this.totalAmount = total;
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(`${localStorage.getItem('user')}`);
    this.cartService.getCartItem(this.currentUser?.id).subscribe((data) => {
      // this.cartItems = data;
      this.cartItems = data;
      console.log(data);
      this.total();
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Billing, {
      width: '500px',
      // boarderRadius: '10px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'billing',
  templateUrl: 'billing.html',
})
export class Billing {
  constructor(
    public dialogRef: MatDialogRef<Billing>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
