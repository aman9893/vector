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

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
