import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';
  
  register(user:any) {
    return this.http.post(`${this.apiUrl}/register`, user)
  }

  login(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user)
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

}
