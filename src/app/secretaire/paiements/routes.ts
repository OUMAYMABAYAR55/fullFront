import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'enregistrer',
    loadComponent: () => import('./enregistrer/enregistrer.component').then(m => m.EnregistrerComponent)
  },
  {
    path: 'afficher',
    loadComponent: () => import('./afficher/afficher.component').then(m => m.AfficherComponent)
  },
  {
    path: 'retard',
    loadComponent: () => import('./retard/retard.component').then(m => m.RetardComponent)
  },
  {
    path: 'rapports',
    loadComponent: () => import('./rapports/rapports.component').then(m => m.RapportsComponent)
  },
  {
    path: '',
    redirectTo: 'enregistrer',
    pathMatch: 'full'
  }
];