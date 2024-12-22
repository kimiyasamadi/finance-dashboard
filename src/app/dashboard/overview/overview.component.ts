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

  accountDetails = {
    totalBalance: 240399,
    accountType: 'Credit Card',
    accountBalance: 25000,
    accountNumber: '3388 4556 8860 8***',
    logo: 'assets/icons/Icon.svg',
  };

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
              label: 'This Week',
              data: this.weeklyStatistics,
              backgroundColor: 'rgba(41, 157, 145, 0.2)', // Tailwind Primary color (light)
              borderColor: '#299D91', // Tailwind Primary color
              borderWidth: 1,
            },
            {
              label: 'Last Week',
              data: [4000, 10000, 15000, 10000, 16000, 20000, 18000],
              backgroundColor: 'rgba(82, 82, 86, 0.2)', // Tailwind Secondary color (light)
              borderColor: '#525256', // Tailwind Secondary color
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
                text: 'Days',
                color: '#525256', // Tailwind Secondary text color
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Revenue',
                color: '#525256', // Tailwind Secondary text color
              },
            },
          },
        },
      });
    } else {
      console.error('Canvas element not found');
    }
  }
}
