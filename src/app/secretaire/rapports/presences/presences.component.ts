// src/app/views/rapports/presences/presences.component.ts
import { Component, signal } from '@angular/core';

interface Attendance {
  id: number;
  name: string;
  present: number;
  absent: number;
  rate: number;
}

@Component({
  selector: 'app-rapports-presences',
  templateUrl: './presences.component.html',
  standalone: true
})
export class PresencesComponent {
  attendanceData = signal<Attendance[]>([
    {
      id: 1,
      name: 'Youssef Gharbi',
      present: 8,
      absent: 2,
      rate: 80
    }
  ]);
}