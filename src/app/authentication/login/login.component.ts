import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'

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

  constructor(private router: Router) {}

  // Mock user data
  private mockUser = {
    email: 'samadi@gmail.com',
    password: 'Aa1234567'
  };

  errorMessage: string = '';

  onLogin(): void {
    if (this.email === this.mockUser.email && this.password === this.mockUser.password) {
      this.errorMessage = ''; // Clear error message
      this.router.navigate(['/sidebar']);
    } else {
      console.error('Authentication failed: Invalid email or password');
      this.errorMessage = 'Invalid email or password';
    }
  }
}
