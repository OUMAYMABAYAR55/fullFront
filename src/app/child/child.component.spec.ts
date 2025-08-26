import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface Child {
  id: number;
  firstName: string;
  lastName: string;
  age?: number;
  educationLevel?: string;
  photoUrl?: string;
  certificates?: { title: string; date: string }[];
  history?: { date: string; description: string }[];
  attendance?: { date: string; status: string }[];
  paid?: boolean;
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  child!: Child;
  showAddCertForm = false;
  newCertificate = { title: '', date: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Simuler les données basées sur account.component.ts
    const baseChildren = [
      { id: 1, firstName: 'Marie', lastName: 'Dupont', paid: true, attendance: { 5: true, 10: true, 15: true, 20: true } as any },
      { id: 2, firstName: 'Pierre', lastName: 'Dupont', paid: false, attendance: { 5: false, 10: false, 15: false, 20: false } as any }
    ];
    this.child = baseChildren.find(c => c.id === id) || { id, firstName: 'Inconnu', lastName: 'Inconnu' };
    // Ajouter des données fictives
    this.child.age = 8;
    this.child.educationLevel = 'Primaire';
    this.child.photoUrl = 'https://via.placeholder.com/200';
    this.child.certificates = [{ title: 'Certificat A', date: '2025-01-01' }];
    this.child.history = [{ date: '2025-08-01', description: 'Activité 1' }];
    this.child.attendance = [
      { date: '2025-08-05', status: 'Présent' },
      { date: '2025-08-10', status: 'Absent' }
    ];
  }

  addCertificate() {
    this.showAddCertForm = true;
  }

  editCertificate(cert: { title: string; date: string }) {
    this.newCertificate = { ...cert };
    this.showAddCertForm = true;
  }

  deleteCertificate(cert: { title: string; date: string }) {
    this.child.certificates = this.child.certificates!.filter(c => c !== cert);
  }

  saveCertificate() {
    if (!this.child.certificates) this.child.certificates = [];
    this.child.certificates.push({ ...this.newCertificate });
    this.cancelAddCert();
  }

  cancelAddCert() {
    this.showAddCertForm = false;
    this.newCertificate = { title: '', date: '' };
  }
}