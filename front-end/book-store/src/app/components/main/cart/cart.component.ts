import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { Product, ShoppingService, DialogConfirmComponent } from '../../../imports';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  shoppingList;
  constructor(private shoppingService: ShoppingService,private dialogService:DialogService) {
  }

  ngOnInit() {
    this.shoppingService.subject.subscribe({
      next: () => this.getAllShoppingList()
    });
    this.getAllShoppingList();
   
  }
  getAllShoppingList() {
    this.shoppingList = this.shoppingService.getAllShoppingList();
  }
  clearCart() {
    this.shoppingService.clearCart();
    this.getAllShoppingList();
  }
  showConfirm() {
    this.dialogService.addDialog(DialogConfirmComponent, {
      title: 'Clear Cart',
      message: 'Are You sure you want to clear all your cart?'
    }).subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
          this.clearCart();
        }
      });
  }


}
