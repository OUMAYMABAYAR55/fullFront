// src/app/views/membres/inactifs/inactifs.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AvatarComponent } from '@coreui/angular';

interface InactiveMember {
  id: number;
  name: string;
  phone: string;
  deactivationDate: Date;
  reason: string;
  avatar?: string;
}

@Component({
  selector: 'app-inactifs',
  templateUrl: './inactifs.component.html',
  imports: [DatePipe, AvatarComponent],
  standalone: true
})
export class InactifsComponent {
  inactiveMembers = signal<InactiveMember[]>([
    {
      id: 3,
      name: 'Ahmed Ben Ali',
      phone: '+216 55 987 654',
      deactivationDate: new Date('2023-12-15'),
      reason: 'Déménagement',
      avatar: './assets/images/avatars/3.jpg'
    }
  ]);
}