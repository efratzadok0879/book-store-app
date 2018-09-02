import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product, Global } from '../../imports';

@Injectable()
export class ShoppingService {

    subject = new Subject();
    constructor() { }

    getAllShoppingList():Product[] {
        let shoppingList: Product[] = JSON.parse(localStorage.getItem(Global.shoppingList));
        return shoppingList;
    }
    addBookToShoppingList(product: Product): boolean {
        let shoppingList: Product[] = this.getAllShoppingList();
        shoppingList.push(product);
        localStorage.setItem(Global.shoppingList, JSON.stringify(shoppingList));
        return true;
    }
    removeBookFromShoppingList(productId: number) {
        let shoppingList: Product[] = this.getAllShoppingList();
        let index = shoppingList.findIndex(product => product.id == productId);
        shoppingList.slice(index, 1);
        localStorage.setItem(Global.shoppingList, JSON.stringify(shoppingList));
        return true;
    }


}