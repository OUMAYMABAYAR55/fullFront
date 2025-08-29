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
    // 🔍 Debug: Check current auth state
    console.log('Login Page - ngOnInit');
    console.log('Is user already logged in?', this.authService.isLoggedIn());

    // ✅ Only redirect if already logged in
    if (this.authService.isLoggedIn()) {
      this.roles = this.authService.getRoles();
      console.log('User roles:', this.roles);
      this.redirectUser();
    }
  }

  onSubmit(): void {
    this.isLoginFailed = false;
    this.errorMessage = '';
    const { email, password } = this.form;

    // 🔹 Call backend login API
    this.authService.login(email, password).subscribe({
      next: (data) => {
        // ✅ Save token and user data
        this.authService.saveToken(data.token);
        this.authService.saveUser(data);
        this.roles = this.authService.getRoles();

        console.log('Login successful', data);
        console.log('User roles:', this.roles);

        // 🔁 Redirect based on role
        this.redirectUser();
      },
      error: (err: any) => {
        console.error('Login error', err);
        this.isLoginFailed = true;
        this.errorMessage = err.error?.message || 'Invalid email or password.';
      }
    });
  }

  /**
   * Redirect user based on their role
   */
  private redirectUser(): void {
    if (this.roles.includes('ADMIN')) {
      this.router.navigate(['/admin']);
    } else if (this.roles.includes('PARENT')) {
      this.router.navigate(['/account']);
    } else if (this.roles.includes('SECRETAIRE')) {
      // ✅ Redirect to DASH-SEC dashboard
      this.router.navigate(['/dashboard']);
    } else if (this.roles.includes('GERANT')) {
      this.router.navigate(['/gerant']);
    } else {
      // Default fallback
      this.router.navigate(['/home']);
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }
}