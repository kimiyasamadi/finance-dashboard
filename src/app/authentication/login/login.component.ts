import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  rememberMe: boolean = false;
  hidePassword: boolean = true;

  private readonly TOKEN_URL = 'http://217.197.97.50:8080/realms/finance_dashboard/protocol/openid-connect/token';
  private readonly CLIENT_AUTH = 'ZGFzaGJvYXJkX2NsaWVudDpSYndkRDVDellZSk9jd3lldGpPM0hxTlNKOTlobjF5Tw==';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    // Prepare headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${this.CLIENT_AUTH}`,
    });

    const body = new HttpParams()
      .set('username', this.email)
      .set('password', this.password)
      .set('grant_type', 'password');

    this.http.post<any>(this.TOKEN_URL, body.toString(), { headers }).subscribe({
      next: (response) => {
        if (response.access_token) {
          if (this.rememberMe) {
            localStorage.setItem('access_token', response.access_token);
            if (response.refresh_token) {
              localStorage.setItem('refresh_token', response.refresh_token);
            }
          } else {
            sessionStorage.setItem('access_token', response.access_token);
            if (response.refresh_token) {
              sessionStorage.setItem('refresh_token', response.refresh_token);
            }
          }

          this.errorMessage = '';
          this.router.navigate(['/sidebar']);
        } else {
          this.errorMessage = 'Failed to retrieve access token. Please try again.';
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = 'Invalid username or password. Please try again.';
      },
    });
  }
}

