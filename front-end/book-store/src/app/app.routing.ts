import { Routes, RouterModule } from '@angular/router';

import {
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    HomeComponent,
    CartComponent,
    AuthGuard
} from './imports';

const appRoutes: Routes = [
    {
        path: 'bookStore/home', component: HomeComponent
    },
    {
        path: 'bookStore/myAccount', component: AccountComponent, children:
            [
                { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
                { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
                { path: '**', redirectTo: 'login' }
            ]
    },
    {
        path: 'bookStore/products', component: ProductsComponent, children:
            [
                { path: 'allProducts', component: AllProductsComponent },
                { path: 'productDetails', component: ProductDetailsComponent },
                { path: '**', redirectTo: 'allProducts' }
            ]
    },
    {
        path: 'bookStore/cart', component: CartComponent, canActivate: [AuthGuard]
    },
    { path: 'bookStore', redirectTo: 'bookStore/home' },
    // otherwise redirect to home
    { path: '**', redirectTo: 'bookStore/home' }
];

export const routing = RouterModule.forRoot(appRoutes);