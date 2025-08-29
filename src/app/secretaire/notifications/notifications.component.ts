// src/app/views/messages/notifications/notifications.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';

interface Notification {
  id: number;
  title: string;
  time: Date;
  type: 'urgent' | 'regular';
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  imports: [DatePipe, IconDirective],
  standalone: true
})
export class NotificationsComponent {
  notifications = signal<Notification[]>([
    {
      id: 1,
      title: 'Paiement en retard',
      time: new Date(),
      type: 'urgent'
    },
    {
      id: 2,
      title: 'Inscription en attente',
      time: new Date(),
      type: 'regular'
    }
  ]);

  getIcon(notif: Notification) {
    return notif.type === 'urgent' ? 'cilWarning' : 'cilBell';
  }
}