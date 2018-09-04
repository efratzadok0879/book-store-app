import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { Product, ShoppingService, DialogConfirmComponent } from '../../../../imports';


@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css', '../../products/product-preview/product-preview.component.css']
})
export class CartProductComponent implements OnInit {

  @Input()
  product;
  constructor(private shoppingService: ShoppingService, private dialogService: DialogService) { }

  ngOnInit() {

  }
  removeBook() {
    this.shoppingService.removeBookFromShoppingList(this.product.product.id);
    this.shoppingService.subject.next();
  }
  incAmount(){
    this.product.amount++;
    this.shoppingService.updateAmount(this.product)
  }
  decAmount(){
    if(this.product.amount>1)
    this.product.amount--;
    this.shoppingService.updateAmount(this.product)

  }
  showConfirm() {
    this.dialogService.addDialog(DialogConfirmComponent, {
      title: 'Remove Book',
      message: 'Are You sure you want to romove this book?'
    }).subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
          this.removeBook();
        }
      });
  }

}
