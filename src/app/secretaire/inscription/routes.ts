import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'nouvelle',
    loadComponent: () => import('./nouvelle/nouvelle.component').then(m => m.NouvelleComponent)
  },
  {
    path: 'attente',
    loadComponent: () => import('./attente/attente.component').then(m => m.AttenteComponent)
  },
  {
    path: 'historique',
    loadComponent: () => import('./historique/historique.component').then(m => m.HistoriqueComponent)
  },
  {
    path: '',
    redirectTo: 'nouvelle',
    pathMatch: 'full'
  }
];