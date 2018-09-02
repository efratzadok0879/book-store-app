import { Component, OnInit } from '@angular/core';
import { Global } from '../../../../imports';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent implements OnInit {

  localStorage = localStorage;
  global=Global;
  constructor() { }

  ngOnInit() {
  }

}
