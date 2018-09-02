import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Global } from '../../imports';
import { User } from '../../imports';

@Injectable()
export class AuthenticationService {
    constructor() { }

    login(username: string, password: string) {
        //check if login successful 
        let user: User = JSON.parse(localStorage.getItem(Global.userList)).find(user =>
            user.user.userName.toLowerCase() == username.toLowerCase() &&
            user.password.toLowerCase() == password.toLowerCase());
        let isOk = user != null;
        if (isOk)
            // store user details in local storage to keep user logged in between page refreshes
            localStorage.setItem(Global.currentUser, user.id.toString());
        return of(isOk);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(Global.currentUser);
    }
}