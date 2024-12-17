import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser, NgForOf} from '@angular/common';
import { Chart, registerables } from 'chart.js';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [
    SidebarComponent,
    MatIconButton,
    MatIcon,
    MatCard,
    NgForOf,
    MatCardContent,
    MatButton
  ],
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements AfterViewInit {
  expenseGoals = [
    { category: 'Housing', amount: 250.00, icon: 'location_city' },
    { category: 'Food', amount: 250.00, icon: 'restaurant_menu' },
    { category: 'Transportation', amount: 250.00, icon: 'train' },
    { category: 'Entertainment', amount: 250.00, icon: 'movie' },
    { category: 'Shopping', amount: 250.00, icon: 'shopping_cart' },
    { category: 'Others', amount: 250.00, icon: 'public' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSavingSummaryChart();
    }
  }

  private initializeSavingSummaryChart(): void {
    const ctx = document.getElementById('savingSummaryChart') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: [
            'May 01', 'May 05', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30',
          ],
          datasets: [
            {
              label: 'This Month',
              data: [500, 700, 1000, 1300, 1600, 1800, 2000],
              borderColor: '#299D91',
              backgroundColor: 'rgba(41, 157, 145, 0.2)',
              tension: 0.4,
              fill: true,
            },
            {
              label: 'Same Period Last Month',
              data: [450, 600, 900, 1200, 1500, 1700, 1900],
              borderColor: '#525256',
              backgroundColor: 'rgba(82, 82, 86, 0.2)',
              tension: 0.4,
              fill: true,
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
                text: 'Days of the Month',
                color: '#525256',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Savings ($)',
                color: '#525256',
              },
            },
          },
        },
      });
    } else {
      console.error('Chart canvas not found');
    }
  }
}
