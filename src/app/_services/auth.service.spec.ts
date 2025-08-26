import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>('API_URL/login', { username, password });
  }

 register(username: string, email: string, password: string) {
  return this.http.post<any>('http://localhost:8081/api/auth/register', { 
    username, 
    email, 
    password 
  });
}}
