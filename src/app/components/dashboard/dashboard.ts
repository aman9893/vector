
import { Component } from '@angular/core';
import { GoalRow, GoalStat } from '../../models/dashboard.model';
import { StatCardsComponent } from '../stat-cards/stat-cards';
import { GoalsTableComponent } from '../goals-table/goals-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [    StatCardsComponent, 
    GoalsTableComponent],
  templateUrl: './dashboard.html',
})
export class DashboardComponent {

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