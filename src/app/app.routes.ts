import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import {SidebarComponent } from './shared/sidebar/sidebar.component';
import {OverviewComponent} from './dashboard/overview/overview.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent},
  { path: 'overview', component: OverviewComponent},
];
