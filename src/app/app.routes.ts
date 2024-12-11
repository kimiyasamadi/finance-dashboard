import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import {SidebarComponent } from './shared/sidebar/sidebar.component';
import {OverviewComponent} from './dashboard/overview/overview.component';
import {BalancesComponent} from './dashboard/balances/balances.component';
import {TransactionsComponent} from './dashboard/transactions/transactions.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'balances', component: BalancesComponent},
  { path: 'transactions', component: TransactionsComponent},
];
