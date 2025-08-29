// src/app/views/rapports/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'presences',
    loadComponent: () => import('./presences/presences.component').then(m => m.PresencesComponent)
  },
  {
    path: 'financier',
    loadComponent: () => import('./financier/financier.component').then(m => m.FinancierComponent)
  },
  {
    path: '',
    redirectTo: 'presences',
    pathMatch: 'full'
  }
];