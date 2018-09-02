import { Component, OnInit } from '@angular/core';
import { Global } from '../../../imports';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  localStorage = localStorage;
  global=Global;
  constructor() { }
  ngOnInit() {
  }
}
