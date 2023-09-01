import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        // Login success, redirection handled in the service
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Handle login error, show error message to user
        this.password = '';
        this.loginError = error.error.message;
      }
    );
  }
}
