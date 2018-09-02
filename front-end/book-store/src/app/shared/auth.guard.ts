import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Global } from '../imports';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (route.url.length >= 2 && route.url[1].path == 'cart') {
            if (localStorage.getItem(Global.currentUser)) {
                // logged in so return true
                return true;
            }

            // not logged in so redirect to login page with the return url
            this.router.navigate(['/bookStore/home']);
            return false;
        }
        //in case of routing to login or register
        else {
            if (!localStorage.getItem(Global.currentUser)) {
                // not logged in so return true
                return true;
            }
            // logged in so return false
            return false;
        }

    }
}