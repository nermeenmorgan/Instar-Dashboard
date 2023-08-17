import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Add "!" to indicate it will be initialized

  rememberMe: boolean = false;
  submitted: boolean = false;
  loginError = false;

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false] // Add this line to initialize the rememberMe field
    });
  }

  login() {
    console.log('Login form submitted');
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    console.log('Form is valid. Proceeding with login');

    this._auth.login(this.loginForm.value).subscribe(
      (response: any) => {
        if (response.token) {
          alert("Login Successful");
          console.log(response);
          localStorage.setItem('token', response.token); // Store token in localStorage
          this.loginForm.reset();
          this.submitted = false; 
          this.router.navigate(['dashboard']);
        } else {
          alert("Login Failed");
        }
      },
      err => {
        alert("Login Failed");
      }
    );
  }
}

