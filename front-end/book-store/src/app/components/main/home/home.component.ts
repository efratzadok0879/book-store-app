import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  address: { city: string, street: string, houseNumber: number };
  bookStoreUrl:string;
  
  constructor() {
    this.address = { city: "Tel-aviv", street: "Hamasger", houseNumber: 12 };
  }

  ngOnInit() {
  }

}
