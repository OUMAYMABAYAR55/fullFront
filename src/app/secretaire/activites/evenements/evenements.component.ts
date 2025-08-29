// src/app/views/activites/evenements/evenements.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  time: string;
  type: 'compétition' | 'atelier' | 'démonstration';
  image?: string;
  participants: number;
}

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  imports: [DatePipe],
  standalone: true
})
export class EvenementsComponent {
  events = signal<Event[]>([
    {
      id: 1,
      title: 'Compétition Nationale de Robotique',
      description: 'Participez à la grande compétition annuelle.',
      date: new Date('2025-05-15'),
      time: '09:00',
      type: 'compétition',
      image: 'https://via.placeholder.com/300x150?text=Robotique',
      participants: 24
    }
  ]);

  onCreateEvent() {
    alert('Nouvel événement programmé !');
  }
}