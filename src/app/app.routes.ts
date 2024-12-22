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

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  { path: 'sidebar', component: SidebarComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'balances', component: BalancesComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: 'bills', component: BillsComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'settings', component: SettingsComponent},
];
