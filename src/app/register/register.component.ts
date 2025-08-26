import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService, RegisterData } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: RegisterData = { nom: '', prenom: '', email: '', password: '', telephone: '', adresse: '' };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.form).subscribe({
      next: () => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err: any) => {
        this.errorMessage = err.error || 'Erreur lors de l\'inscription';
        this.isSignUpFailed = true;
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
