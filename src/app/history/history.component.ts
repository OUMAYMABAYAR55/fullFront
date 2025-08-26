import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  activities = [
    { date: '2025-07-25', description: 'Séance d\'étude', child: 'Marie Dupont' },
    { date: '2025-07-28', description: 'Compétition de lecture', child: 'Pierre Dupont' },
    { date: '2025-08-01', description: 'Atelier artistique', child: 'Marie Dupont' }
  ];
}