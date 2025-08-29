// fullFront/src/app/app.routes.ts
import { Routes } from '@angular/router';

// 🔹 Public Components
import { DescriptionComponent } from './description/description.component';
import { Age46Component } from './pages/ages/age46/age46.component';
import { Age710Component } from './pages/ages/age710/age710.component';
import { Age1113Component } from './pages/ages/age1113/age1113.component';
import { Age1315Component } from './pages/ages/age1315/age1315.component';
import { Age1618Component } from './pages/ages/age1618/age1618.component';
import { ContactComponent } from './contact/contact.component';
import { ClubComponent } from './club/club.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// 🔹 Lazy-loaded User Pages
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountComponent } from './account/account.component';
import { HistoryComponent } from './history/history.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

// 🔹 Secretary Layout
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

// 🔹 Auth Guard
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  // 🌐 Public Routes (use your original AppComponent layout)
  { path: 'home', component: DescriptionComponent, data: { animation: 'Home' } },
  { path: 'ages/4-6', component: Age46Component, data: { animation: 'Age46' } },
  { path: 'ages/7-10', component: Age710Component, data: { animation: 'Age710' } },
  { path: 'ages/11-13', component: Age1113Component, data: { animation: 'Age1113' } },
  { path: 'ages/13-15', component: Age1315Component, data: { animation: 'Age1315' } },
  { path: 'ages/16-18', component: Age1618Component, data: { animation: 'Age1618' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
  { path: 'club', component: ClubComponent, data: { animation: 'Club' } },
  { path: 'login', component: LoginComponent, data: { animation: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { animation: 'Register' } },

  // 🔐 User Protected Routes
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account.component').then(m => m.AccountComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.component').then(m => m.HistoryComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'parent',
    loadComponent: () => import('./parent/parent.component').then(m => m.ParentComponent),
    canActivate: [AuthGuard],
    data: { animation: 'ParentPage' }
  },
  {
    path: 'child/:id',
    loadComponent: () => import('./child/child.component').then(m => m.ChildComponent),
    canActivate: [AuthGuard]
  },

  // 📊 SECRETARY DASHBOARD (uses CoreUI layout)
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: ['SECRETAIRE'] }, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./secretaire/dashboard/routes').then(m => m.routes) },
      { path: 'membres', loadChildren: () => import('./secretaire/membres/routes').then(m => m.routes) },
      { path: 'inscription', loadChildren: () => import('./secretaire/inscription/routes').then(m => m.routes) },
      { path: 'paiements', loadChildren: () => import('./secretaire/paiements/routes').then(m => m.routes) },
      { path: 'presences', loadChildren: () => import('./secretaire/presences/routes').then(m => m.routes) },
      { path: 'activites', loadChildren: () => import('./secretaire/activites/routes').then(m => m.routes) },
      { path: 'notifications', loadChildren: () => import('./secretaire/notifications/routes').then(m => m.routes) },
      { path: 'rapports', loadChildren: () => import('./secretaire/rapports/routes').then(m => m.routes) },
      { path: 'config', loadChildren: () => import('./secretaire/config/routes').then(m => m.routes) },
      { path: 'aide', loadChildren: () => import('./secretaire/aide/routes').then(m => m.routes) }
    ]
  },

  // 🏁 Redirects
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];