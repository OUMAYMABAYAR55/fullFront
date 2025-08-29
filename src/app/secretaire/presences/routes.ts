// src/app/views/presences/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'marquer',
    loadComponent: () => import('./marquer/marquer.component').then(m => m.MarquerComponent)
  },
  {
    path: 'absences',
    loadComponent: () => import('./absences/absences.component').then(m => m.AbsencesComponent)
  },
  {
    path: '',
    redirectTo: 'marquer',
    pathMatch: 'full'
  }
];