//---------------------- shared ----------------------

//models
export { User } from './shared/models/user.model';
export { Product } from './shared/models/product.model';

//services
export { AuthenticationService } from './shared/services/authentication.service';
export { ProductService } from './shared/services/product.service';
export { ShoppingService } from './shared/services/shopping.service'

export { AuthGuard } from './shared/auth.guard';
export { Global } from './shared/global';

//---------------------- components ----------------------

export { AppComponent } from './app.component';
//header
export { HeaderComponent } from './components/header/header.component';
export { LogoComponent } from './components/header/logo/logo.component';
export { MenuComponent } from './components/header/menu/menu.component';
//main
export { MainComponent } from './components/main/main.component';
export { HomeComponent } from './components/main/home/home.component';
export { AccountComponent } from './components/main/account/account.component';
export { AccountMenuComponent } from './components/main/account/account-menu/account-menu.component';
export { LoginComponent } from './components/main/account/login/login.component';
export { RegisterComponent } from './components/main/account/register/register.component';
export { UploadImageComponent } from './components/main/account/upload-image/upload-image.component';
export { ProductsComponent } from './components/main/products/products.component';
export { AllProductsComponent } from './components/main/products/all-products/all-products.component';
export { SearchComponent } from './components/main/products/search/search.component';
export { ProductPreviewComponent } from './components/main/products/product-preview/product-preview.component';
export { ProductDetailsComponent } from './components/main/products/product-details/product-details.component';
export { CartComponent } from './components/main/cart/cart.component';
export { CartProductComponent } from './components/main/cart/cart-product/cart-product.component';
export { DialogConfirmComponent  } from './components/main/dialog-confirm/dialog-confirm.component';

//footer
export { FooterComponent } from './components/footer/footer.component';


