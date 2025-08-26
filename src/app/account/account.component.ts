import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { ParentService, Utilisateur, Enfant } from '../_services/parent.service';

interface Day { day: number; present: boolean; singleSession: boolean; }

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  parent: Utilisateur = { nom: '', prenom: '', email: '', telephone: '', adresse: '' };
  children: Enfant[] = [];

  selectedYear = new Date().getFullYear();
  selectedMonth = new Date().getMonth();
  years: number[] = [];
  months = [
    { name: 'Janvier', value: 0 }, { name: 'Février', value: 1 }, { name: 'Mars', value: 2 },
    { name: 'Avril', value: 3 }, { name: 'Mai', value: 4 }, { name: 'Juin', value: 5 },
    { name: 'Juillet', value: 6 }, { name: 'Août', value: 7 }, { name: 'Septembre', value: 8 },
    { name: 'Octobre', value: 9 }, { name: 'Novembre', value: 10 }, { name: 'Décembre', value: 11 }
  ];

  calendarDays: { [key: number]: Day[][] } = {};
  showAddChildForm = false;
  newChild: Partial<Enfant> = { nom: '', prenom: '' };

  constructor(private parentService: ParentService, private router: Router) {
    for (let y = 2020; y <= 2030; y++) this.years.push(y);
  }

  ngOnInit(): void {
    this.loadProfil();
    this.loadEnfants();
  }

  loadProfil(): void {
    this.parentService.getProfil().subscribe({
      next: profil => this.parent = profil,
      error: err => console.error('Erreur chargement profil', err)
    });
  }

  loadEnfants(): void {
    this.parentService.getEnfants().subscribe({
      next: data => {
        this.children = data;
        this.updateCalendars();
      },
      error: err => console.error('Erreur chargement enfants', err)
    });
  }

  updateCalendars(): void {
    this.children.forEach(c => this.updateCalendar(c.id!));
  }

  updateCalendar(childId: number): void {
    const child = this.children.find(c => c.id === childId);
    if (!child) return;

    const y = this.selectedYear;
    const m = this.selectedMonth;
    const nb = new Date(y, m + 1, 0).getDate();
    const fd = new Date(y, m, 1).getDay();
    const start = (fd === 0 ? 6 : fd - 1); // lundi=0

    let cal: Day[][] = [];
    let week: Day[] = [];

    for (let i = 0; i < start; i++) week.push({ day: 0, present: false, singleSession: false });

    for (let d = 1; d <= nb; d++) {
      let baseDay: Day = { day: d, present: false, singleSession: false };
      if (child.attendance && child.attendance[d] !== undefined) baseDay.present = child.attendance[d];

      week.push(baseDay);
      if (week.length === 7) {
        cal.push(week);
        week = [];
      }
    }

    if (week.length > 0) while (week.length < 7) week.push({ day: 0, present: false, singleSession: false });
    if (week.length > 0) cal.push(week);

    this.calendarDays[childId] = cal;
  }

  getCalendarDays(id: number) {
    return this.calendarDays[id] || [];
  }

  addChild(): void {
    if (!this.newChild.nom || !this.newChild.prenom) return;

    this.parentService.addEnfant(this.newChild).subscribe({
      next: child => {
        this.children.push(child);
        this.updateCalendar(child.id!);
        this.newChild = { nom: '', prenom: '' };
        this.showAddChildForm = false;
      },
      error: err => console.error('Erreur ajout enfant', err)
    });
  }

  deleteChild(id: number): void {
    this.parentService.deleteEnfant(id).subscribe({
      next: () => this.children = this.children.filter(c => c.id !== id),
      error: err => console.error('Erreur suppression enfant', err)
    });
  }

  logout(): void {
    // vider token si nécessaire
    this.router.navigate(['/home']);
  }
}
