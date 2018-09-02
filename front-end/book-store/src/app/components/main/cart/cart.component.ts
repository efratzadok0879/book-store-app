import { Component, OnInit } from '@angular/core';
import { Product,ShoppingService } from '../../../imports';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingList:Product[];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.shoppingList=this.shoppingService.getAllShoppingList();

  }

}
