// src/app/views/paiements/enregistrer/enregistrer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  standalone: true
})
export class EnregistrerComponent {
  onSubmit() {
    alert('Paiement enregistré !');
  }
}