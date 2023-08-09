import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup;

  
  image: any;
  select(e:any){
    this.image = e.target.files[0];
  }

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      Firstname: [''],
      Lastname: [''],
      email: [''],
      phone: [''],
      password: [''],
      // image: ['']
      // confirm_password: ['']
    });
    

  }
 
  register() {
    this._auth.register(this.registerform.value)
      .subscribe(
        res => {
          if (this.registerform.value) {
          alert("Register Successful");
          console.log(res)
          this.registerform.reset();
          this.router.navigate(['login']);
        } else {
          alert("Register Failed");
        }
        },
        err => { 
          alert("Something went wrong")
        }
      )
  }
}
