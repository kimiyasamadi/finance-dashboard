import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === '/api/login' && req.method === 'POST') {
      const mockUser = { email: 'samadi@gmail.com', password: 'Aa1234567' };

      const { email, password } = req.body;

      if (email === mockUser.email && password === mockUser.password) {
        return of(
          new HttpResponse({
            status: 200,
            body: { success: true, token: 'mock-auth-token' },
          })
        );
      } else {
        return of(
          new HttpResponse({
            status: 401,
            body: { success: false, message: 'Invalid email or password' },
          })
        );
      }
    }

    return next.handle(req); // Pass through for all other requests
  }
}
