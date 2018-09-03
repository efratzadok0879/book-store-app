import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../../node_modules/@angular/router';
import { ProductService,ShoppingService, Product, Global } from '../../../../imports';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  localStorage = localStorage;
  global = Global;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService,private shoppingService:ShoppingService) { }

  ngOnInit() {
    let productId: number;
    this.activatedRoute.params.subscribe(params => productId = params['productId']);
    this.product=this.productService.getProductById(productId);
console.log(this.product);
  }
  AddToCart() {
    this.shoppingService.addBookToShoppingList(this.product);
  }
  preview() {
    this.router.navigate(['/bookStore/products/allProducts']);
  }
}
