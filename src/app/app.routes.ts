import { Routes } from '@angular/router';
// Update the path below if your AuthGuard is located elsewhere, e.g. './services/auth.guard'
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';

import { Age46Component } from './pages/ages/age46/age46.component';
import { Age710Component } from './pages/ages/age710/age710.component';
import { Age1113Component } from './pages/ages/age1113/age1113.component';
import { Age1315Component } from './pages/ages/age1315/age1315.component';
import { Age1618Component } from './pages/ages/age1618/age1618.component';
import { DescriptionComponent } from './description/description.component';
import { ClubComponent } from './club/club.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  // Page d'accueil accessible sans login
  { path: 'home', component: DescriptionComponent },

  { path: 'ages/4-6', component: Age46Component },
  { path: 'ages/7-10', component: Age710Component },
  { path: 'ages/11-13', component: Age1113Component },
  { path: 'ages/13-15', component: Age1315Component },
  { path: 'ages/16-18', component: Age1618Component },
  { path: 'contact', component: ContactComponent },
  { path: 'club', component: ClubComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'forgot-password', loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  { path: 'reset-password', loadComponent: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },

  // Routes protégées par AuthGuard
  { path: 'account', loadComponent: () => import('./account/account.component').then(m => m.AccountComponent), canActivate: [AuthGuard] },
  { path: 'history', loadComponent: () => import('./history/history.component').then(m => m.HistoryComponent), canActivate: [AuthGuard] },

  {
  path: 'parent',
  loadComponent: () =>
    import('./parent/parent.component').then(m => m.ParentComponent), 
  canActivate: [AuthGuard], 
  data: { animation: 'ParentPage' }
},
  { path: 'child/:id', loadComponent: () => import('./child/child.component').then(m => m.ChildComponent), canActivate: [AuthGuard] },

  // Redirection par défaut vers home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
