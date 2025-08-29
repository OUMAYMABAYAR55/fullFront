// src/app/views/activites/certificates/certificates.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Certificate {
  id: number;
  member: string;
  type: string;
  date: Date;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  imports: [DatePipe],
  standalone: true
})
export class CertificatesComponent {
  recentCertificates = signal<Certificate[]>([
    {
      id: 1,
      member: 'Youssef Gharbi',
      type: 'Maîtrise Arduino',
      date: new Date('2025-03-20')
    }
  ]);

  onCreate() {
    alert('Certificat généré !');
  }
}