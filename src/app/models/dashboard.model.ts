export interface GoalStat {
  label: string;
  count: number;
  icon: string;
  colorClass: string;
}

export interface GoalRow {
  hospital: string;
  subLocation?: string;
  status: 'Live' | 'Assigned' | 'Pending Internal Review' | 'Pending HM/RM Review';
  goalName: string;
  description: string;
  startDate: string;
  daysInStatus: number;
  hasTask: boolean;
}

// Ye naya interface add karna zaroori hai popup ke liye
export interface AssignableGoal {
  id: number;
  name: string;
  isSelected: boolean;
  vetcorAvg: string;
  current: string;
  recommended: string;
  status: 'Active' | 'Inactive';
  showTargetInput?: boolean;
  targetValue?: string;
  targetDateEndQ1?: boolean;
}

export interface TaskStat {
  label: string;
  count: number;
  icon: string;
  colorClass: string; // 'red', 'blue', 'green'
}

export interface TaskRow {
  type: 'individual' | 'group'; // determines the icon
  hospital: string;
  taskName: string;
  goal: string;
  dueDate: string;
  createdBy: string;
  assignedTo: string;
  status: 'Past Due' | 'Complete' | 'Pending';
}