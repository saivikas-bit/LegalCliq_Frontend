import { User } from './../../models/user';
import { CartService } from './../../services/cart.service';
import { UserService } from './../../services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login: any = null;
  currentUser: User | null = null;
  cartItems: any = { product: [], userId: 0 };

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(`${localStorage.getItem('user')}`);

    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      this.login = JSON.parse(`${localStorage.getItem('user')}`);
    }
    this.userService.login.subscribe((data) => {
      if (localStorage.getItem('user')) {
        this.login = JSON.parse(`${localStorage.getItem('user')}`);
      }
    });
    this.cartService.$itemAdded.subscribe((data) => {
      this.cartService.getCartItem(this.currentUser?.id).subscribe((data) => {
        this.cartItems = data;

        // this.cartItems = data.filter(
        //   (user) => user.userId === this.currentUser?.id
        // );
      });
    });

    if (this.currentUser !== null) {
      this.cartService.getCartItem(this.currentUser?.id).subscribe((data) => {
        this.cartItems = data;
        // this.cartItems = data.filter(
        //   (user) => user.userId === this.currentUser?.id
        // );
      });
    }
  }
  logout() {
    localStorage.setItem('user', 'null');
    location.reload();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      // boarderRadius: '10px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openDialog1(): void {
    const dialogRef1 = this.dialog.open(DialogOverviewExampleDialog1, {
      width: '500px',
    });

    dialogRef1.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openDialog2(): void {
    const dialogRef2 = this.dialog.open(DialogOverviewExampleDialog2, {
      width: '1000px',
    });

    dialogRef2.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialog-overview-example-dialog1',
  templateUrl: 'dialog-overview-example-dialog1.html',
})
export class DialogOverviewExampleDialog1 {
  constructor(
    public dialogRef1: MatDialogRef<DialogOverviewExampleDialog1>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef1.close();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog2',
  templateUrl: 'dialog-overview-example-dialog2.html',
})
export class DialogOverviewExampleDialog2 {
  constructor(
    public dialogRef2: MatDialogRef<DialogOverviewExampleDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef2.close();
  }
}
