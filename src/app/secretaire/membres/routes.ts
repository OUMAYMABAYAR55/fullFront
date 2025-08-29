import { Routes } from '@angular/router'; 

export const routes: Routes = [
  {
    path: 'liste',
    loadComponent: () => import('./liste/liste.component').then(m => m.ListeComponent)
  },
  {
    path: 'nouveau',
    loadComponent: () => import('./nouveau/nouveau.component').then(m => m.NouveauComponent)
  },
  {
    path: 'inactifs',
    loadComponent: () => import('./inactifs/inactifs.component').then(m => m.InactifsComponent)
  },
  {
    path: '',
    redirectTo: 'liste',
    pathMatch: 'full'
  }
];