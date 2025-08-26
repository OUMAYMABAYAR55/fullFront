import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  form = {
    password: '',
    confirmPassword: '',
  };

  message = '';
  error = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.form.password !== this.form.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas.';
      return;
    }

    // Simule un appel API
    setTimeout(() => {
      this.message = 'Mot de passe réinitialisé avec succès !';
      this.error = '';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }, 1000);
  }
}
