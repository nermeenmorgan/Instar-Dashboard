import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private apiUrl = 'http://localhost:9000/api';
  tokenKey = 'auth_token'; // Key to store token in local storage
  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
      tap((response: any) => {
        // Save token to local storage
        localStorage.setItem(this.tokenKey, response.token);
        // Redirect to some dashboard or protected route
        this.router.navigate(['/dashboard']);
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getAllUsers() {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  editUser(id: number, userData: any) {
    return this.http.patch(`${this.apiUrl}/users/${id}/edit`, userData);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}/delete`);
  }
  
}
