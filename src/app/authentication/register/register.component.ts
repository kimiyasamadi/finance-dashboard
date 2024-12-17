import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    NgIf,
    MatButtonModule,
    MatIcon,
    MatButton,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  hidePassword: boolean = true;

  onRegister(): void {
    if (this.name && this.email && this.password) {
      console.log('Registration Successful:', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    } else {
      console.error('Please fill out all fields!');
    }
  }
}
