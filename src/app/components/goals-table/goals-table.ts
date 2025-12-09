import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Form module zaroori hai input ke liye
import { GoalRow, AssignableGoal } from '../../models/dashboard.model';

@Component({
  selector: 'app-goals-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goals-table.html',
  styleUrls: ['./goals-table.scss']
})
export class GoalsTableComponent {
  @Input() goals: GoalRow[] = [];
  
  showModal: boolean = false;
  searchTerm: string = '';

  // Popup ka data
  assignableGoalsList: AssignableGoal[] = [
    {
      id: 1, name: 'Ensure Consistent Reminders for Visits', isSelected: false,
      vetcorAvg: '60% have reminders', current: '40% have reminders', recommended: '50% have reminders', status: 'Inactive'
    },
    {
      id: 2, name: 'Implement Wellness Plans', isSelected: false,
      vetcorAvg: '220 subscriptions', current: '135 subscriptions', recommended: '185 subscriptions', status: 'Inactive'
    },
    {
      id: 3, name: 'Optimize Home Delivery', isSelected: true,
      vetcorAvg: '25 checkout links/wk', current: '12 checkout links/wk', recommended: '28 checkout links/week', status: 'Inactive',
      showTargetInput: true, targetValue: '28', targetDateEndQ1: true
    },
    {
      id: 4, name: 'Expand Hours', isSelected: false,
      vetcorAvg: '30 hours/week', current: '35 hours/week', recommended: '38 hours/week', status: 'Inactive'
    },
    {
      id: 5, name: 'Activate Paid Ads', isSelected: false,
      vetcorAvg: '$250/week', current: '$275/week', recommended: '$270/week', status: 'Inactive'
    }
  ];

  // Search logic
  get filteredAssignableGoals(): AssignableGoal[] {
    return this.assignableGoalsList.filter(goal => 
      goal.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Button click par ye function call hoga
  openAssignModal() { 
    this.showModal = true; 
    this.searchTerm = ''; 
  }

  closeModal() { 
    this.showModal = false; 
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Live': return 'status-green';
      case 'Assigned': return 'status-blue';
      case 'Pending Internal Review': return 'status-orange';
      case 'Pending HM/RM Review': return 'status-red';
      default: return '';
    }
  }
}