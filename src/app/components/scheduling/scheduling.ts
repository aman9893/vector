// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-scheduling',
//   imports: [],
//   templateUrl: './scheduling.html',
//   styleUrl: './scheduling.scss',
// })
// export class Scheduling {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.html',
  styleUrls: ['./scheduling.scss'],
  imports: [CommonModule],
})
export class SchedulingComponent {
  // Mock data to populate the table
  meetings = [
    {
      subject: 'Leadership Toolkit Meeting',
      hospital: 'CT - Canton - Roaring',
      date: '10/05/2025 | 3:00 pm',
      duration: '30 min',
      timezone: 'Central Time (US & Canada)',
      attendees: 'Victoria Brown / Bianca Briga'
    },
    {
      subject: 'Leadership Toolkit Meeting',
      hospital: 'CT - Chester - Chester',
      date: '10/18/2025 | 1:00 pm',
      duration: '1 hr',
      timezone: 'Central Time (US & Canada)',
      attendees: 'Victoria Brown / Lisa Mullin'
    },
    {
      subject: 'Leadership Toolkit Meeting',
      hospital: 'CT - East Hartford - East Hartford',
      date: '10/21/2025 | 1:30 pm',
      duration: '1 hr',
      timezone: 'Central Time (US & Canada)',
      attendees: 'Victoria Brown / Emily Davies'
    },
    {
      subject: 'Leadership Toolkit Meeting',
      hospital: 'CT - Kensington - Berlin',
      date: '10/29/2025 | 9:00 am',
      duration: '30 min',
      timezone: 'Central Time (US & Canada)',
      attendees: 'Victoria Brown / Sarah Smith'
    },
    {
      subject: 'Leadership Toolkit Meeting',
      hospital: 'CT - New Fairfield - New Fairfield',
      date: '11/09/2025 | 3:00 pm',
      duration: '30 min',
      timezone: 'Central Time (US & Canada)',
      attendees: 'Victoria Brown / Meredith Rivers'
    },
    {
      subject: 'Leadership Toolkit Meeting',
      hospital: 'CT - Norwalk - A Cat\'s Place',
      date: '11/16/2025 | 1:00 pm',
      duration: '30 min',
      timezone: 'Central Time (US & Canada)',
      attendees: 'Victoria Brown / John Smith'
    }
  ];
}