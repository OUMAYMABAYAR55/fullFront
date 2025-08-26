import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email = '';
  message = '';
  error = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8081/api/auth/forgot-password', {
      email: this.email
    }).subscribe({
      next: () => {
        this.message = 'Un lien de réinitialisation a été envoyé à votre adresse e-mail.';
        this.error = '';
      },
      error: err => {
        this.error = err.error.message || 'Erreur lors de l’envoi du lien.';
        this.message = '';
      }
    });
  }
}
