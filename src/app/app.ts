import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// all child components 
import { HeaderComponent } from './components/header/header';
import { StatCardsComponent } from './components/stat-cards/stat-cards';
import { GoalsTableComponent } from './components/goals-table/goals-table';
import { GoalStat, GoalRow } from './models/dashboard.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    HeaderComponent, 
    StatCardsComponent, 
    GoalsTableComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('vetcor-dashboard');
  dashboardStats: GoalStat[] = [
    { label: 'Goals Live', count: 4, icon: 'check_circle', colorClass: 'green' },
    { label: 'Goals Assigned', count: 2, icon: 'domain', colorClass: 'blue' },
    { label: 'Goals Pending Internal Review', count: 1, icon: 'work', colorClass: 'orange' },
    { label: 'Goals Pending HM/RM Review', count: 1, icon: 'manage_accounts', colorClass: 'red' },
  ];

  // 2. Data for the table
  goalRows: GoalRow[] = [
    {
      hospital: 'FL - Apopka - Park Ave',
      status: 'Pending Internal Review',
      goalName: 'Activate Paid Ads',
      description: 'Ensure Vetstoria booking parameters are flexible',
      startDate: '10/05/2025',
      daysInStatus: 3,
      hasTask: true
    },
    {
      hospital: 'FL - Coconut Creek',
      subLocation: 'Coco Park',
      status: 'Pending HM/RM Review',
      goalName: 'Optimize Online Booking',
      description: 'Remove early morning or lunch time blocks',
      startDate: '10/18/2025',
      daysInStatus: 2,
      hasTask: true
    },
    {
      hospital: 'FL - Coconut Creek',
      subLocation: 'Coco Park',
      status: 'Live',
      goalName: 'Improve Forward Booking',
      description: 'Set a forward booking prompt in software',
      startDate: '10/21/2025',
      daysInStatus: 2,
      hasTask: false
    },
    {
      hospital: 'FL - Coconut Creek',
      subLocation: 'Coco Park',
      status: 'Assigned',
      goalName: 'Activate Paid Ads',
      description: 'Ensure Vetstoria booking parameters are flexible',
      startDate: '10/29/2025',
      daysInStatus: 2,
      hasTask: false
    }
  ];
}
