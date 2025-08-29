// src/app/views/inscription/attente/attente.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

interface PendingApp {
  id: number;
  name: string;
  age: number;
  group: string;
  date: Date;
  missingDocs: string[];
}

@Component({
  selector: 'app-attente',
  templateUrl: './attente.component.html',
  imports: [DatePipe],
  standalone: true
})
export class AttenteComponent {
  pendingCount = 12;

  pendingApps = signal<PendingApp[]>([
    {
      id: 1,
      name: 'Ali Ben Salah',
      age: 14,
      group: 'Débutant',
      date: new Date('2025-04-01'),
      missingDocs: ['Photo', 'Fiche médicale']
    },
    {
      id: 2,
      name: 'Sana Ben Amor',
      age: 12,
      group: 'Débutant',
      date: new Date('2025-04-03'),
      missingDocs: []
    }
  ]);
}