import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
    if (token) {
      return of(true); // Allow access if token exists
    } else {
      this.router.navigate(['/login']); // Redirect to login if no token
      return of(false);
    }
  }
}
