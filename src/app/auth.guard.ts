import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }

    // Verify token using the mock API
    return this.http.post('/api/auth/verify', { token }).pipe(
      map(() => true),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
