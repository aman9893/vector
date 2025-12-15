import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Variable to store the current page name for Breadcrumbs
  pageTitle: string = 'Goals';

  constructor(private router: Router) {
    // Listen to route changes to update the breadcrumb title
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updatePageTitle(event.url);
    });
  }

  updatePageTitle(url: string) {
    if (url.includes('active-tasks')) {
      this.pageTitle = 'Active Tasks';
    } else if (url.includes('scheduling')) {
      this.pageTitle = 'Scheduling';
    } else if (url.includes('dashboard')) {
      this.pageTitle = 'Dashboard';
    } else {
      this.pageTitle = 'Goals';
    }
  }
}
