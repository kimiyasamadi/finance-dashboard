import {AfterViewInit, Component} from '@angular/core';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatProgressBar} from '@angular/material/progress-bar';
import { registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    CommonModule,
    MatCardModule,
    SidebarComponent,
    MatIconButton,
    MatIcon,
    MatGridList,
    MatGridTile,
    MatProgressBar
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {
  userName = 'Tanzir';
  currentDate = new Date().toDateString();

  totalBalance = 240399;
  accountType = 'Credit Card';
  accountBalance = 25000;

  goals = {
    targetAchieved: 12500,
    target: 20000
  };

  upcomingBills = [
    { date: 'May 15', name: 'Figma - Monthly', amount: 150 },
    { date: 'June 16', name: 'Adobe - Yearly', amount: 559 }
  ];

  recentTransactions = [
    { name: 'GTR 5', amount: 160 },
    { name: 'Polo Shirt', amount: 20 },
    { name: 'Biriyani', amount: 10 }
  ];

  expenseBreakdown = {
    housing: 250,
    food: 80,
    shopping: 420,
    transportation: 650
  };

  weeklyStatistics = [5000, 12000, 20000, 15000, 18000, 25000, 22000];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    Chart.register(...registerables); // Register Chart.js components
  }

  ngAfterViewInit(): void {
    // Check if we're in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.initializeChart();
    } else {
      console.error('Document is not defined. Chart cannot be initialized.');
    }
  }

  private initializeChart(): void {
    const ctx = document.getElementById('statisticsChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [
            {
              label: 'Weekly Earnings',
              data: this.weeklyStatistics,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            tooltip: {
              enabled: true
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('Canvas element not found');
    }
  }
}
