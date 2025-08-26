import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = { email: '', password: '' };
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.roles = this.authService.getRoles();
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.authService.saveToken(data.token);
        this.authService.saveUser(data);

        this.roles = this.authService.getRoles();
        this.isLoginFailed = false;

        // Redirection selon rôle
        if (this.roles.includes('ADMIN')) this.router.navigate(['/admin']);
        else if (this.roles.includes('PARENT')) this.router.navigate(['/account']);
        else if (this.roles.includes('SECRETAIRE')) this.router.navigate(['/secretaire']);
        else if (this.roles.includes('GERANT')) this.router.navigate(['/gerant']);
        else this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.errorMessage = err.error || 'Erreur lors de la connexion';
        this.isLoginFailed = true;
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }
}
