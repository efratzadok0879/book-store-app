import { Component, OnInit } from '@angular/core';
import { Global } from './imports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // if (localStorage.getItem(Global.shoppingList) == null)
    //   localStorage.setItem(Global.shoppingList, JSON.stringify([]));
  }

}
