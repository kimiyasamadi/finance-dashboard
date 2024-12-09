import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatNavList} from '@angular/material/list';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIcon,
    MatNavList,
    MatListItem,
    NgForOf,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuItems = [
    { label: 'Overview', icon: 'dashboard', route: '/overview' },
    { label: 'Balances', icon: 'account_balance_wallet', route: '/balances' },
    { label: 'Transactions', icon: 'swap_horiz', route: '/transactions' },
    { label: 'Bills', icon: 'receipt', route: '/bills' },
    { label: 'Expenses', icon: 'bar_chart', route: '/expenses' },
    { label: 'Goals', icon: 'flag', route: '/goals' },
    { label: 'Settings', icon: 'settings', route: '/settings' },
  ];
}
