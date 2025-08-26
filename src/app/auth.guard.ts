import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './_services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn();
    const roles = this.authService.getRoles();
    const requiredRoles = route.data['roles'] as string[];

    if (!isLoggedIn) return this.router.createUrlTree(['/login']);
    if (requiredRoles && !roles.some(role => requiredRoles.includes(role))) return this.router.createUrlTree(['/login']);

    return true;
  }
}
