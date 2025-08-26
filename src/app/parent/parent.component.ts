// src/app/parent/parent.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ParentService, Enfant, Utilisateur } from '../_services/parent.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // Informations du parent
  lastName = '';
  firstName = '';
  email = '';
  phoneNumber = '';
  adresse = '';

  // Gestion des enfants
  enfants: Enfant[] = [];
  showAddChildForm = false;
  newChild: Partial<Enfant> = { nom: '', prenom: '' };

  // Paiements mensuels (exemple)
  monthlyPayments = [
    { month: 'Juillet 2025', amount: 50 },
    { month: 'Août 2025', amount: 50 }
  ];

  constructor(private parentService: ParentService) {}

  ngOnInit(): void {
    this.loadProfil();
    this.loadEnfants();
  }

  // Charger les infos du parent depuis l'API
  loadProfil(): void {
    this.parentService.getProfil().subscribe({
      next: profil => {
        this.lastName = profil.nom;
        this.firstName = profil.prenom;
        this.email = profil.email;
        this.phoneNumber = profil.telephone || '';
        this.adresse = profil.adresse || '';
      },
      error: err => console.error('Erreur chargement profil', err)
    });
  }

  // Mettre à jour les infos du parent
  updateProfile(): void {
    this.parentService.updateProfil({
      nom: this.lastName,
      prenom: this.firstName,
      email: this.email,
      telephone: this.phoneNumber,
      adresse: this.adresse
    }).subscribe({
      next: profil => alert('Profil mis à jour ✅'),
      error: err => console.error('Erreur mise à jour profil', err)
    });
  }

  // Charger la liste des enfants
  loadEnfants(): void {
    this.parentService.getEnfants().subscribe({
      next: data => this.enfants = data,
      error: err => console.error('Erreur chargement enfants', err)
    });
  }

  // Ajouter un enfant
  saveChild(): void {
    if (this.newChild.nom && this.newChild.prenom) {
      this.parentService.addEnfant(this.newChild as Enfant).subscribe({
        next: child => {
          this.enfants.push(child);
          this.newChild = { nom: '', prenom: '' };
          this.showAddChildForm = false;
        },
        error: err => console.error('Erreur ajout enfant', err)
      });
    }
  }

  // Annuler l'ajout d'un enfant
  cancelAddChild(): void {
    this.showAddChildForm = false;
    this.newChild = { nom: '', prenom: '' };
  }

  // Modifier un enfant
  editChild(child: Enfant): void {
    const newNom = prompt('Nouveau nom :', child.nom) || child.nom;
    const newPrenom = prompt('Nouveau prénom :', child.prenom) || child.prenom;
    this.parentService.addEnfant({ ...child, nom: newNom, prenom: newPrenom }).subscribe({
      next: updated => this.loadEnfants(),
      error: err => console.error('Erreur modification enfant', err)
    });
  }

  // Supprimer un enfant
deleteChild(id?: number): void {
  if (id == null) return; // Ne fait rien si id est undefined
  this.parentService.deleteEnfant(id).subscribe({
    next: () => this.enfants = this.enfants.filter(c => c.id !== id),
    error: err => console.error('Erreur suppression enfant', err)
  });
}

}
