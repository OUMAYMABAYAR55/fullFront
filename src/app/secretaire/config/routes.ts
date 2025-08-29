import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil.component').then(m => m.ProfilComponent)
  },
  {
    path: 'systeme',
    loadComponent: () => import('./systeme/systeme.component').then(m => m.SystemeComponent)
  },
  {
    path: '',
    redirectTo: 'profil',
    pathMatch: 'full'
  }
];