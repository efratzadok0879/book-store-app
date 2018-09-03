import { Component, OnInit } from '@angular/core';
import { Product, ShoppingService, DialogConfirmComponent } from '../../../imports';
import { DialogService } from "ng2-bootstrap-modal";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingList: Product[];
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
    let disposable = this.dialogService.addDialog(DialogConfirmComponent, {
      title: 'Clear Cart',
      message: 'Are You sure you want to clear all your cart?'
    })
      .subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
         this.clearCart();
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    // setTimeout(() => {
    //   disposable.unsubscribe();
    // }, 10000);
  }
}
