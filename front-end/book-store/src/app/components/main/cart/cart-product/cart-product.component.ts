import { Component, OnInit, Input } from '@angular/core';
import { Product, ShoppingService } from '../../../../imports';
 

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css','../../products/product-preview/product-preview.component.css']
})
export class CartProductComponent implements OnInit {

  @Input()
  product: Product;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {

  }
  removeBook() {
    this.shoppingService.removeBookFromShoppingList(this.product.id);
    this.shoppingService.subject.next();
  }

}
