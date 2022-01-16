import { BodyComponent } from './home/body/body.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AdminGuard } from './gaurds/admingaurd';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { SupplierdeatilsComponent } from './supplierdeatils/supplierdeatils.component';
import { SupplieraddComponent } from './supplieradd/supplieradd.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UserproductComponent } from './userproduct/userproduct.component';
import { SignupComponent } from './signup/signup.component';
import { ProductEventEmitterComponent } from './product-event-emitter/product-event-emitter.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductComponent },
  {
    path: 'suppliers',
    component: SupplierComponent,
    // canActivate: [AdminGuard],
  },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'addproduct', component: ProductaddComponent },
  { path: 'updateproduct', component: ProductupdateComponent },
  { path: 'suppliers/:id', component: SupplierdeatilsComponent },
  { path: 'addsupplier', component: SupplieraddComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/:id', component: UserdetailsComponent },
  { path: 'adduser', component: UseraddComponent },
  { path: 'updateuser', component: UserupdateComponent },
  { path: 'userproducts', component: UserproductComponent },
  // { path: 'signup', component: SignupComponent },
  { path: 'product/:id', component: ProductdetailsComponent },
  { path: 'producteventemitter', component: ProductEventEmitterComponent },
  { path: 'about', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
