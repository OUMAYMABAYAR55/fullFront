import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterData {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  telephone: string;
  adresse: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:8081/api/auth/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}login`, { email, password }, this.httpOptions);
  }

  register(data: RegisterData): Observable<any> {
    return this.http.post(`${this.API_URL}register`, data, this.httpOptions);
  }

  // Stockage token et rôle
  saveToken(token: string): void {
    localStorage.setItem('auth-token', token);
  }

  saveUser(user: any): void {
    localStorage.setItem('auth-user', JSON.stringify(user));
  }

  getToken(): string | null {
    return localStorage.getItem('auth-token');
  }

  getUser(): any {
    const user = localStorage.getItem('auth-user');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getRoles(): string[] {
    const user = this.getUser();
    return user?.role ? [user.role] : [];
  }

  signOut(): void {
    localStorage.clear();
  }
}
