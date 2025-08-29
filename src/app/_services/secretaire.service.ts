import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define interfaces for type safety
export interface Notification {
  id: number;
  message: string;
  type: string;
  date: string;
  lu: boolean;
}

export interface Membre {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  age: number;
  groupe: string;
}

export interface Paiement {
  id: number;
  membreNom: string;
  montant: number;
  date: string;
  methode: string;
  statut: 'payé' | 'en attente' | 'en retard';
}

export interface Activite {
  id: number;
  titre: string;
  description: string;
  date: string;
  lieu: string;
  participants: number;
}

@Injectable({
  providedIn: 'root'
})
export class SecretaireService {
  private API_URL = 'http://localhost:8081/api/secretaire'; 
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
    }
  };

  constructor(private http: HttpClient) {}

  // 🔔 Notifications
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.API_URL}/notifications`, this.getHttpOptions());
  }

  markAsRead(id: number): Observable<any> {
    return this.http.patch(`${this.API_URL}/notifications/${id}/read`, {}, this.getHttpOptions());
  }

  

  getMembreById(id: number): Observable<Membre> {
    return this.http.get<Membre>(`${this.API_URL}/membres/${id}`, this.getHttpOptions());
  }

  // 💵 Payments
  getPaiements(): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(`${this.API_URL}/paiements`, this.getHttpOptions());
  }

  createPaiement(data: any): Observable<Paiement> {
    return this.http.post<Paiement>(`${this.API_URL}/paiements`, data, this.getHttpOptions());
  }

  // 📅 Activities
  getActivites(): Observable<Activite[]> {
    return this.http.get<Activite[]>(`${this.API_URL}/activites`, this.getHttpOptions());
  }

  createActivite(data: any): Observable<Activite> {
    return this.http.post<Activite>(`${this.API_URL}/activites`, data, this.getHttpOptions());
  }

  // 📊 Reports (example)
  getRapportGlobal(): Observable<any> {
    return this.http.get(`${this.API_URL}/rapports/global`, this.getHttpOptions());
  }
  // 🔹 Membres
  getAllMembres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/membres`);
  }

  // 🔹 Paiements en retard
  getPaiementsEnRetard(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/paiements/en-retard`);
  }

  // 🔹 Inscriptions en attente
  getInscriptionsEnAttente(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/inscription/en-attente`);
  }

  // 🔹 Présences aujourd'hui
  getPresencesToday(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/presences/aujourd-hui`);
  }
  // ✅ Helper: Refresh headers (in case token changes)
  private getHttpOptions() {
    const token = localStorage.getItem('auth-token');
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
  }
}