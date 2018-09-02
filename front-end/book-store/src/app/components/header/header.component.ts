import { Component, OnInit } from '@angular/core';
import { User, Global } from '../../imports';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  localStorage = localStorage;
  global = Global;
  json = JSON;
  constructor(private authenticationService: AuthenticationService) { }
  ngOnInit() {
  }


}
