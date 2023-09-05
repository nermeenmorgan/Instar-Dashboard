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

  username = '';
  password = '';

  // status bar color

  isEmailFilled: boolean = false;
  isPasswordFilled: boolean = false;
  emailWarning: string = '';

  // Function to check if email field is filled
  checkEmailField() {
    this.isEmailFilled = this.username.trim() !== '';

    // Call the checkPasswordField() function only when the email field is filled
    if (this.isEmailFilled) {
      this.checkPasswordField();
    } else {
      // Reset isPasswordFilled when the email field is not filled
      this.isPasswordFilled = false;

      // Set the email warning message
      this.emailWarning = 'Please enter your email first.';
    }
  }

  // Function to check if password field is filled
  checkPasswordField() {
    // Ensure that this function is only called when the email field is filled
      this.isPasswordFilled = this.password.trim() !== '';
 
      if (this.isPasswordFilled && !this.isEmailFilled) {
        this.emailWarning = 'Please enter your email first.';
        this.isPasswordFilled = false;
      } else {
        this.emailWarning = '';
      }
    }
  

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

