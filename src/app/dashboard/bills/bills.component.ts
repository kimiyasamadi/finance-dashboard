import { Component } from '@angular/core';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {MatIconButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {DatePipe, NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [
    SidebarComponent,
    MatIconButton,
    MatCard,
    DatePipe,
    NgForOf,
    MatIcon
  ],
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent {
  bills = [
    {
      name: 'Figma - Yearly Plan',
      description: 'For advanced security and more flexible controls.',
      dueDate: new Date(2024, 4, 15), // May 15, 2024
      lastCharge: new Date(2023, 4, 14), // May 14, 2023
      amount: 150,
      logo: 'assets/icons/Figma.svg', // Path to Figma logo SVG
    },
    {
      name: 'Adobe Inc - Yearly Plan',
      description: 'For advanced security and more flexible controls.',
      dueDate: new Date(2024, 5, 16), // June 16, 2024
      lastCharge: new Date(2023, 5, 17), // June 17, 2023
      amount: 559,
      logo: 'assets/icons/Adobe.svg', // Path to Adobe logo SVG
    },
  ];
}
