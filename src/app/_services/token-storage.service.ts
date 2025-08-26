import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'auth-user';

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  saveUser(user: any): void {
    // Stocke uniquement role et token (par exemple)
    const userToStore = {
      role: user.role,
      token: user.token
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(userToStore));
  }

  getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  signOut(): void {
    localStorage.clear();
  }
}
