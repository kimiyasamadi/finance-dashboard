import {AfterViewInit, Component} from '@angular/core';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent} from '@angular/material/card';
import {isPlatformBrowser, NgForOf} from '@angular/common';
import Chart from 'chart.js/auto';
import { Inject, PLATFORM_ID } from '@angular/core';
import {registerables} from 'chart.js';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [

    SidebarComponent,
    MatIconButton,
    MatIcon,
    MatCard,
    NgForOf,
    MatCardContent
  ],
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements AfterViewInit {
  expenses = [
    {
      category: 'Housing',
      icon: 'home',
      total: 250,
      details: [
        { name: 'House Rent', amount: 230 },
        { name: 'Parking', amount: 20 },
      ],
    },
    {
      category: 'Food',
      icon: 'restaurant',
      total: 350,
      details: [
        { name: 'Grocery', amount: 230 },
        { name: 'Restaurant bill', amount: 120 },
      ],
    },
    {
      category: 'Transportation',
      icon: 'directions_car',
      total: 50,
      details: [
        { name: 'Taxi Fare', amount: 30 },
        { name: 'Metro Card bill', amount: 20 },
      ],
    },
    {
      category: 'Entertainment',
      icon: 'movie',
      total: 80,
      details: [
        { name: 'Movie ticket', amount: 30 },
        { name: 'iTunes', amount: 50 },
      ],
    },
    {
      category: 'Shopping',
      icon: 'shopping_cart',
      total: 420,
      details: [
        { name: 'Shirt', amount: 230 },
        { name: 'Jeans', amount: 190 },
      ],
    },
    {
      category: 'Others',
      icon: 'attach_money',
      total: 50,
      details: [
        { name: 'Donation', amount: 30 },
        { name: 'Gift', amount: 20 },
      ],
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeExpensesChart();
    }
  }

  private initializeExpensesChart(): void {
    const ctx = document.getElementById('expensesChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ],
          datasets: [
            {
              label: 'This Year',
              data: [2000, 3000, 5000, 7000, 9000, 11000, 13000, 15000, 18000, 19000, 20000, 22000],
              backgroundColor: 'rgba(41, 157, 145, 0.7)',
              borderColor: '#299D91',
              borderWidth: 1,
            },
            {
              label: 'Last Year',
              data: [1500, 2500, 4500, 6000, 8000, 9500, 12000, 13500, 16000, 17500, 18500, 20000],
              backgroundColor: 'rgba(82, 82, 86, 0.7)',
              borderColor: '#525256',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Months',
                color: '#525256',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Expenses ($)',
                color: '#525256',
              },
            },
          },
        },
      });
    } else {
      console.error('Chart canvas not found!');
    }
  }
}
