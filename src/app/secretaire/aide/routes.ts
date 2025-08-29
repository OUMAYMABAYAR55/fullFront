import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'guide',
    loadComponent: () => import('./guide/guide.component').then(m => m.GuideComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '',
    redirectTo: 'guide',
    pathMatch: 'full'
  }
];