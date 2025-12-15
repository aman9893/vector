import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStat, TaskRow } from '../../models/dashboard.model';

@Component({
  selector: 'app-active-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-tasks.html',
  styleUrls: ['./active-tasks.scss']
})
export class ActiveTasksComponent {
  
  // 1. Stats Data
  taskStats: TaskStat[] = [
    { count: 1, label: 'Past Due Tasks', icon: 'assignment_late', colorClass: 'red' },
    { count: 2, label: 'Assigned to Me', icon: 'how_to_reg', colorClass: 'blue' },
    { count: 2, label: 'Assigned to Others', icon: 'groups', colorClass: 'blue' },
    { count: 1, label: 'Completed Tasks', icon: 'assignment_turned_in', colorClass: 'green' }
  ];

  // 2. Table Data (Mock data matching the screenshot)
  tasks: TaskRow[] = [
    { type: 'individual', hospital: 'CT - Canton - Roaring', taskName: 'Example of task 1. Please complete soon.', goal: 'Optimize Online Booking', dueDate: '10/05/2025', createdBy: 'MacKenzie Fortner', assignedTo: 'Victoria Brown', status: 'Past Due' },
    { type: 'individual', hospital: 'CT - Chester - Chester', taskName: 'Please do X, Y, and Z. This needs to be finished.', goal: 'Activate Paid Ads', dueDate: '10/18/2025', createdBy: 'MacKenzie Fortner', assignedTo: 'Victoria Brown', status: 'Complete' },
    { type: 'group', hospital: 'CT - East Hartford - East Hartford', taskName: 'This is an example of task 3. Do part 1 and 2.', goal: 'Improve Forward Booking', dueDate: '10/21/2025', createdBy: 'MacKenzie Fortner', assignedTo: 'Emily Davies', status: 'Complete' },
    { type: 'group', hospital: 'CT - Kensington - Berlin', taskName: 'This if for task 4. Please finish this soon.', goal: 'Activate Paid Ads', dueDate: '10/29/2025', createdBy: 'Jaime D\'Agata', assignedTo: 'Sarah Smith', status: 'Pending' },
    { type: 'group', hospital: 'CT - New Fairfield - New Fairfield', taskName: 'Do a, b, and c, When complete send me a message.', goal: 'Optimize Home Delivery', dueDate: '11/09/2025', createdBy: 'Jaime D\'Agata', assignedTo: 'Sarah Smith', status: 'Complete' },
    { type: 'group', hospital: 'CT - Norwalk - A Cat\'s Place', taskName: 'Example of task 6. Please complete soon.', goal: 'Activate Paid Ads', dueDate: '11/16/2025', createdBy: 'Jaime D\'Agata', assignedTo: 'Meredith Rivers', status: 'Pending' },
    { type: 'group', hospital: 'CT - Norwalk - Strawberry Hill', taskName: 'Please do X, Y, and Z. This needs to be finished.', goal: 'Activate Paid Ads', dueDate: '11/19/2025', createdBy: 'Jaime D\'Agata', assignedTo: 'Meredith Rivers', status: 'Pending' },
    { type: 'group', hospital: 'CT - Simsbury - Hopmeadow', taskName: 'This is an example of task 8. Do part 1 and 2.', goal: 'Optimize Online Booking', dueDate: '11/22/2025', createdBy: 'Jennifer Freestone', assignedTo: 'Bianca Briga', status: 'Pending' },
    { type: 'group', hospital: 'CT - Simsbury - Simsbury', taskName: 'This if for task 9. Please finish this soon.', goal: 'Improve Forward Booking', dueDate: '11/29/2025', createdBy: 'Sharalyn Ezzo', assignedTo: 'Lisa Mullin', status: 'Pending' },
    { type: 'group', hospital: 'CT - Stamford - High Ridge', taskName: 'Do a, b, and c, When complete send me a message.', goal: 'Optimize Home Delivery', dueDate: '12/05/2025', createdBy: 'Sharalyn Ezzo', assignedTo: 'Lisa Mullin', status: 'Pending' },
  ];

  // Helper for Status Badge Color
  getStatusClass(status: string): string {
    switch(status) {
      case 'Past Due': return 'badge-red';
      case 'Complete': return 'badge-green';
      case 'Pending': return 'badge-blue';
      default: return '';
    }
  }
}