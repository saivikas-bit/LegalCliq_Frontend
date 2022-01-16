import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  DialogOverviewExampleDialog,
  DialogOverviewExampleDialog1,
  DialogOverviewExampleDialog2,
  HeaderComponent,
} from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { AdminComponent } from './admin/admin.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AdminGuard } from './gaurds/admingaurd';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { SupplieraddComponent } from './supplieradd/supplieradd.component';
import { SupplierdeatilsComponent } from './supplierdeatils/supplierdeatils.component';
import { UserComponent } from './user/user.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { SupplierupdateComponent } from './supplierupdate/supplierupdate.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { UserproductComponent } from './userproduct/userproduct.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductEventEmitterComponent } from './product-event-emitter/product-event-emitter.component';
import { PipeexampleComponent } from './pipes/pipeexample/pipeexample.component';
import { FebonacciconverterPipe } from './pipes/fibonacciconverter.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent, Billing } from './cart/cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    ProductComponent,
    ContactComponent,
    AdminComponent,
    SupplierComponent,
    ProductdetailsComponent,
    ProductaddComponent,
    SupplieraddComponent,
    SupplierdeatilsComponent,
    UserComponent,
    ProductupdateComponent,
    UseraddComponent,
    UserdetailsComponent,
    UserupdateComponent,
    SupplierupdateComponent,
    UserproductComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialog1,
    DialogOverviewExampleDialog2,
    SignupComponent,
    LoginComponent,
    ProductEventEmitterComponent,
    PipeexampleComponent,
    FebonacciconverterPipe,
    AboutusComponent,
    CartComponent,
    Billing,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatBadgeModule,
    MatDividerModule,
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
