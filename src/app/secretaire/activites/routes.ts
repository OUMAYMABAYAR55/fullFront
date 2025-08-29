import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'certificates',
    loadComponent: () => import('./certificates/certificates.component').then(m => m.CertificatesComponent)
  },
  {
    path: 'evenements',
    loadComponent: () => import('./evenements/evenements.component').then(m => m.EvenementsComponent)
  },
  {
    path: '',
    redirectTo: 'certificates',
    pathMatch: 'full'
  }
];