import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../components/auth-illustration/auth-illustration.component.css']
})
export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  image: any;
  registerError = '';

  username = '';
  password = '';
  email = '';
  phone = '';

  isEmailFilled: boolean = false;
  isPasswordFilled: boolean = false;
  emailWarning: string = '';
  isPhoneNumberFilled: boolean = false;
  isUserNameFilled: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      Firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  checkEmailField() {
    this.isEmailFilled = this.email.trim() !== '';

    if (this.isEmailFilled) {
      this.checkPasswordField();
    } else {
      this.isPasswordFilled = false;
      this.emailWarning = 'Please enter your email first.';
    }
  }

  checkPhoneNumberField() {
    this.isPhoneNumberFilled = this.phone.trim() !== '';

    if (this.isUserNameFilled && !this.isEmailFilled) {
      this.emailWarning = 'Please enter your email first.';
      this.isPasswordFilled = false;
    } else {
      this.emailWarning = '';
    }
  }

  checkUserNameField() {
    this.isUserNameFilled = this.username.trim() !== '';

    if (this.isPasswordFilled && !this.isEmailFilled) {
      this.emailWarning = 'Please enter your email first.';
      this.isPasswordFilled = false;
    } else {
      this.emailWarning = '';
    }
  }

  checkPasswordField() {
    this.isPasswordFilled = this.password.trim() !== '';

    if (this.isPasswordFilled && !this.isEmailFilled) {
      this.emailWarning = 'Please enter your email first.';
      this.isPasswordFilled = false;
    } else {
      this.emailWarning = '';
    }
  }

  register() {
    if (this.registerform.invalid) {
      return; // Form is invalid, don't proceed with registration
    }

    this.authService.register(this.registerform.value)
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
