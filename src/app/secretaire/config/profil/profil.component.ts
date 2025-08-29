// src/app/views/config/profil/profil.component.ts
import { Component } from '@angular/core';
import { AvatarComponent } from '@coreui/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  imports: [AvatarComponent],
  standalone: true
})
export class ProfilComponent {
  onSubmit() {
    alert('Profil mis à jour !');
  }
}