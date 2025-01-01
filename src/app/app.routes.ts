import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {SidebarComponent } from './shared/sidebar/sidebar.component';
import {OverviewComponent} from './dashboard/overview/overview.component';
import {BalancesComponent} from './dashboard/balances/balances.component';
import {TransactionsComponent} from './dashboard/transactions/transactions.component';
import {BillsComponent} from './dashboard/bills/bills.component';
import {ExpensesComponent} from './dashboard/expenses/expenses.component';
import {GoalsComponent} from './dashboard/goals/goals.component';
import {SettingsComponent} from './dashboard/settings/settings.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  { path: 'sidebar', component: SidebarComponent, canActivate: [AuthGuard]},
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]},
  { path: 'balances', component: BalancesComponent, canActivate: [AuthGuard]},
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  { path: 'bills', component: BillsComponent, canActivate: [AuthGuard]},
  {path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard]},
  {path: 'goals', component: GoalsComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
