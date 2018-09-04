import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product, Global } from '../../imports';

@Injectable()
export class ShoppingService {

    subject = new Subject();
    constructor() { }
    getKey() {
        let userId: number = JSON.parse(localStorage.getItem(Global.currentUser)).id;
        let key: string = `userId${userId}:${Global.shoppingList}`;
        if (localStorage.getItem(key) == null)
            localStorage.setItem(key, '[]');
        return key;
    }
    getAllShoppingList() {
        let key: string = this.getKey();
        let shoppingList = JSON.parse(localStorage.getItem(key));
        return shoppingList;
    }
    addBookToShoppingList(productToAdd: Product) {
        let shoppingList = this.getAllShoppingList();
        let productIndex: number = shoppingList.findIndex(product => product.product.title == productToAdd.title);
        if (productIndex == -1)
            shoppingList.push({ product: productToAdd, amount: 1 });
        else
            shoppingList[productIndex].amount++;
        this.updateShoppingList(shoppingList);
    }
    removeBookFromShoppingList(productId: number) {
        let shoppingList = this.getAllShoppingList();
        let index = shoppingList.findIndex(product => product.product.id == productId);
        shoppingList.splice(index, 1);
        this.updateShoppingList(shoppingList);
    }
    clearCart() {
        this.updateShoppingList([]);
    }
    updateAmount(productToUpdate) {
        let key: string = this.getKey();
        let shoppingList = this.getAllShoppingList();
        let index = shoppingList.findIndex(product => product.product.title == productToUpdate.product.title);
        shoppingList[index] = productToUpdate;
        this.updateShoppingList(shoppingList);

    }
    updateShoppingList(shoppingList) {
        let key: string = this.getKey();
        localStorage.setItem(key,JSON.stringify(shoppingList));

    }


}