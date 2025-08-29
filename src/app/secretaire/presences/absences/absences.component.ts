// src/app/views/presences/absences/absences.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AvatarComponent } from '@coreui/angular';

interface Member {
  id: number;
  name: string;
  group: string;
  absenceCount: number;
  lastPresence: Date;
  avatar?: string;
}

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  imports: [DatePipe, AvatarComponent],
  standalone: true
})
export class AbsencesComponent {
  highAbsenceCount = 5;

  highAbsenceMembers = signal<Member[]>([
    {
      id: 1,
      name: 'Youssef Gharbi',
      group: 'Avancé',
      absenceCount: 4,
      lastPresence: new Date('2025-04-01'),
      avatar: './assets/images/avatars/1.jpg'
    }
  ]);
}