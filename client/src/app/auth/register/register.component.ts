import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
    '../../components/auth-illustration/auth-illustration.component.css']
})
// ... imports and component decorator ...

export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  image: any;
  registerError = '';

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      Firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  register() {
    if (this.registerform.invalid) {
      return; // Form is invalid, don't proceed with registration
    }

    this._auth.register(this.registerform.value)
      .subscribe(
        () => {
          alert("Register Successful");
          this.registerform.reset(); // Reset the form
          this.router.navigate(['login']);
        },
        error => {
          alert(`Register Failed: ${error.error.message}`);
          this.registerError = error.error.message;

        }
      );
  }

  select(e: any) {
    this.image = e.target.files[0];
  }
}

