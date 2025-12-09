import { Routes } from '@angular/router';
import { GoalsTableComponent } from './components/goals-table/goals-table';
import { ActiveTasksComponent } from './components/active-tasks/active-tasks';
import { SchedulingComponent } from './components/scheduling/scheduling';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'goals', pathMatch: 'full' }, // Default redirect
  { path: 'goals', component: GoalsTableComponent },    // The page we built
  { path: 'active-tasks', component: ActiveTasksComponent },
  { path: 'scheduling', component: SchedulingComponent },
  { path: 'dashboard', component: DashboardComponent }
];