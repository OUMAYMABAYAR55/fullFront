// src/app/views/dashboard/dashboard.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Activity {
  id: number;
  title: string;
  time: Date;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [DatePipe],
  standalone: true
})
export class DashboardComponent {
  today = new Date();

  totalMembers = signal(125);
  todayPresence = signal(45);
  pendingPayments = signal(8);
  pendingRegistrations = signal(12);

  recentActivity = signal<Activity[]>([
    {
      id: 1,
      title: 'Nouveau membre inscrit: Youssef Gharbi',
      time: new Date(),
      icon: 'cilUserPlus'
    },
    {
      id: 2,
      title: 'Paiement reçu: Leila Bouazizi',
      time: new Date(),
      icon: 'cilDollar'
    }
  ]);

  onQuickAddMember() {
    alert('Ajouter un nouveau membre');
  }

  onQuickAddPayment() {
    alert('Enregistrer un paiement');
  }

  onQuickMarkPresence() {
    alert('Marquer la présence');
  }

  onExportData() {
    alert('Exporter les données');
  }
}