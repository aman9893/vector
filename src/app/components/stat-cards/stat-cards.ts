import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Import CommonModule
import { GoalStat } from '../../models/dashboard.model';

@Component({
  selector: 'app-stat-cards',
  standalone: true, // <--- ADD THIS
  imports: [CommonModule], // <--- ADD THIS (allows *ngFor to work)
  templateUrl: './stat-cards.html',
  styleUrls: ['./stat-cards.scss']
})
export class StatCardsComponent {
  @Input() stats: GoalStat[] = [];
}