import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  adresse?: string;
}

export interface Enfant {
  id?: number;
  nom: string;
  prenom: string;
  paid?: boolean;
  attendance?: { [day: number]: boolean };
}

@Injectable({ providedIn: 'root' })
export class ParentService {
  private apiUrl = 'http://localhost:8081/api/parent';

  constructor(private http: HttpClient) {}

  getProfil(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/profil`);
  }

  updateProfil(profil: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.apiUrl}/profil`, profil);
  }

  getEnfants(): Observable<Enfant[]> {
    return this.http.get<Enfant[]>(`${this.apiUrl}/enfants`);
  }

  addEnfant(enfant: Partial<Enfant>): Observable<Enfant> {
    return this.http.post<Enfant>(`${this.apiUrl}/enfants`, enfant);
  }

  updateEnfant(enfant: Enfant): Observable<Enfant> {
    return this.http.put<Enfant>(`${this.apiUrl}/enfants/${enfant.id}`, enfant);
  }

  deleteEnfant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/enfants/${id}`);
  }
}
