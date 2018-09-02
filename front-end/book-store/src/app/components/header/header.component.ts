import { Component, OnInit } from '@angular/core';
import { User,Global } from '../../imports';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string = "Guest";
  userImageUrl:string="https://image.flaticon.com/icons/png/128/149/149071.png";
  constructor() {
    let currentUserId = localStorage.getItem(Global.currentUser);
    if (currentUserId) {
      let user: User = JSON.parse(localStorage.getItem(Global.userList)).find(user => user.id == currentUserId);
      this.userName = `${user.firstName} ${user.lastName}`;
      this.userImageUrl=user.imageUrl;
    }
  }

  ngOnInit() {
  }

}
