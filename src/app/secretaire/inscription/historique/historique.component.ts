// src/app/views/inscription/historique/historique.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Registration {
  id: number;
  name: string;
  group: string;
  date: Date;
}

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  imports: [DatePipe],
  standalone: true
})
export class HistoriqueComponent {
  registrations = signal<Registration[]>([
    {
      id: 1,
      name: 'Youssef Gharbi',
      group: 'Avancé',
      date: new Date('2024-03-10')
    },
    {
      id: 2,
      name: 'Fatma Khelifi',
      group: 'Débutant',
      date: new Date('2024-04-05')
    }
  ]);
}