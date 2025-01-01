import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  rememberMe: boolean = false;
  hidePassword: boolean = true;
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  // Login method using mock API
  onLogin(): void {
    const loginPayload = { email: this.email, password: this.password };

    // Make HTTP POST request to the mock API
    this.http
      .post<{ success: boolean; token?: string; message?: string }>(
        'http://localhost:4200/login', // Mock API endpoint
        loginPayload
      )
      .subscribe({
        next: (response) => {
          if (response.success && response.token) {
            // Store token in localStorage for authentication
            localStorage.setItem('authToken', response.token);
            this.errorMessage = '';
            this.router.navigate(['/sidebar']); // Navigate to the protected route
          } else {
            this.errorMessage = response.message || 'Invalid email or password';
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.errorMessage = 'Unable to login. Please try again later.';
        },
      });
  }
}

