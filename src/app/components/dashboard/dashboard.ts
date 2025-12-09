// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   imports: [],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.scss',
// })
// export class Dashboard {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div style="padding: 20px;">
      <h2>Dashboard</h2>
      <p>This is the placeholder page for the Dashboard.</p>
    </div>
  `
})
export class DashboardComponent {}