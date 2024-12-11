import { Component } from '@angular/core';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    SidebarComponent,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatIcon,
    MatRow,
    MatHeaderRow,
    MatButton,
    MatHeaderRowDef,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
    DecimalPipe
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactions = [
    {
      icon: 'toys',
      item: 'GTR 5',
      shop: 'Gadget & Gear',
      date: '17 May, 2023',
      method: 'Credit Card',
      amount: 160.0,
    },
    {
      icon: 'checkroom',
      item: 'Polo Shirt',
      shop: 'XL fashions',
      date: '17 May, 2023',
      method: 'Credit Card',
      amount: 20.0,
    },
    {
      icon: 'restaurant',
      item: 'Biriyani',
      shop: 'Hajir Biriyani',
      date: '17 May, 2023',
      method: 'Credit Card',
      amount: 12.0,
    },
    {
      icon: 'local_movies',
      item: 'Movie Ticket',
      shop: 'Inox',
      date: '17 May, 2023',
      method: 'Credit Card',
      amount: 15.0,
    },
    {
      icon: 'local_taxi',
      item: 'Taxi Fare',
      shop: 'Uber',
      date: '17 May, 2023',
      method: 'Credit Card',
      amount: 10.0,
    },
    {
      icon: 'local_pizza',
      item: 'Pizza',
      shop: 'Pizza Hut',
      date: '17 May, 2023',
      method: 'Credit Card',
      amount: 20.0,
    },
    {
      icon: 'keyboard',
      item: 'Keyboard',
      shop: 'Gadget & Gear',
      date: '17 May, 2023',
      method: 'Credit Card',
      amount: 30.0,
    },
  ];
}
