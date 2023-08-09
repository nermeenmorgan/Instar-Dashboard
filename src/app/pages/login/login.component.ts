import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{

  loginForm: FormGroup; 

  user: any;

  constructor(private fb:FormBuilder, private _auth:AuthService, private router: Router) { }
  
  ngOnInit(): void {
     
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

token:any;

  login() {
    this._auth.login(this.loginForm.value)
      .subscribe(
        res => {
          if (this.loginForm.value) {
            alert("Login Successful");
            console.log(res)
            this.loginForm.reset();
            this.router.navigate(['login']);
          } else {
            alert("Login Failed");
          }
        },
        err => { 
          alert("Something went wrong")
        
        }
      )
  }
  
}
