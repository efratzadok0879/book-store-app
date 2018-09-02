import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  //components
  AppComponent,
  //header
  HeaderComponent,
  MenuComponent,
  //main
  MainComponent,
  HomeComponent,
  AccountComponent,
  AccountMenuComponent,
  LoginComponent,
  RegisterComponent,
  ProductsComponent,
  SearchComponent,
  AllProductsComponent,
  ProductPreviewComponent,
  ProductDetailsComponent,
  CartComponent,
  CartProductComponent,
  //footer
  FooterComponent,

  //services
  AuthenticationService,
  ProductService,
  ShoppingService
} from './imports';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  declarations: [
    //components
    AppComponent,
    //header
    HeaderComponent,
    MenuComponent,
    //main
    MainComponent,
    HomeComponent,
    AccountComponent,
    AccountMenuComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    AllProductsComponent,
    SearchComponent,
    ProductPreviewComponent,
    ProductDetailsComponent,
    CartComponent,
    CartProductComponent,
    //footer
    FooterComponent,
    UploadImageComponent

  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    ProductService,
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
