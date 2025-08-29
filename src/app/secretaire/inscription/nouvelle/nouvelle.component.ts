import { Component } from '@angular/core';

@Component({
  selector: 'app-nouvelle',
  imports: [],
  templateUrl: './nouvelle.component.html',
  styleUrl: './nouvelle.component.scss'
})
export class NouvelleComponent {
    onSubmit() {
    alert('Membre enregistré avec succès !');
  }

  onCancel() {
    console.log('Annuler');
    // Add navigation if needed
  }

}
