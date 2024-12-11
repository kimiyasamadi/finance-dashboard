import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-balances',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatButton,
    NgForOf,
    SidebarComponent
  ],
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss']
})
export class BalancesComponent {
  balances = [
    {
      type: 'Credit Card',
      accountNumber: '3388 4556 8860 8***',
      bank: 'Master Card',
      totalAmount: 25000
    },
    {
      type: 'Checking',
      accountNumber: '693 456 69 9****',
      bank: 'AB Bank VISA',
      totalAmount: 25000
    },
    {
      type: 'Savings',
      accountNumber: '133 456 886 8****',
      bank: 'Brac Bank Ltd',
      totalAmount: 25000
    },
    {
      type: 'Investment',
      accountNumber: '698 456 866 2****',
      bank: 'AB Bank Ltd',
      totalAmount: 25000
    },
    {
      type: 'Loan',
      accountNumber: '363 456 896 6****',
      bank: 'City Bank Ltd',
      totalAmount: 25000
    }
  ];
}
