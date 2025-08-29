import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  ButtonDirective,
  FormModule,
  TableModule
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';

interface Paiement {
  id: number;
  nom: string;
  montant: number;
  date: string;
}

@Component({
  selector: 'app-afficher-paiements',
  standalone: true,
  templateUrl: './afficher.component.html',
  imports: [
    CommonModule,
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ButtonDirective,
    FormsModule,
    FormModule,
    TableModule
  ]
})
export class AfficherComponent {
  filtre = '';
  paiements: Paiement[] = [
    { id: 1, nom: 'Jean Dupont', montant: 150, date: '2025-08-01' },
    { id: 2, nom: 'Alice Martin', montant: 200, date: '2025-08-05' },
    { id: 3, nom: 'Karim Ben', montant: 120, date: '2025-08-08' }
  ];

  get paiementsFiltres() {
    if (!this.filtre.trim()) {
      return this.paiements;
    }
    const filtreLower = this.filtre.toLowerCase();
    return this.paiements.filter(p =>
      p.nom.toLowerCase().includes(filtreLower) ||
      p.montant.toString().includes(filtreLower) ||
      p.date.includes(filtreLower)
    );
  }
}
