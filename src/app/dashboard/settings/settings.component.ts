import { Component } from '@angular/core';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatCardTitle,
    SidebarComponent,
    MatIconButton,
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  user = {
    fullName: 'Tanzir Rahman',
    email: 'tanzir.rahman@email.com',
    username: 'tanzir.rahman',
    phone: '+880 51547 58868',
  };
}
