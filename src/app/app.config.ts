// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

// 🔹 Routes
import { routes } from './app.routes';

// 🔹 Interceptor
import { authInterceptor } from './_services/auth.interceptor';

// 🔹 CoreUI (if used)
import { SidebarModule, DropdownModule } from '@coreui/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
    importProvidersFrom(SidebarModule, DropdownModule)
  ]
};