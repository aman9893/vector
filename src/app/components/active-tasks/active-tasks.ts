// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-active-tasks',
//   imports: [],
//   templateUrl: './active-tasks.html',
//   styleUrl: './active-tasks.scss',
// })
// export class ActiveTasks {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-active-tasks',
  standalone: true,
  template: `
    <div style="padding: 20px;">
      <h2>Active Tasks</h2>
      <p>This is the placeholder page for Active Tasks.</p>
    </div>
  `
})
export class ActiveTasksComponent {} 
// ^^^ This 'export' keyword is what fixes the error