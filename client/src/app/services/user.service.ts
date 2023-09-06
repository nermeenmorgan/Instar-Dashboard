import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

// static users list

  users: any[] = [
    {
      "id": 1,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "email": "leanne.graham@gmail.com",
      "phone": "215487",
      "city": "Ariana",
      "product": 15,

    },
    {
      "id": 2,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "email": "leanne.graham@gmail.com",
      "phone": "215487",
      "city": "Ariana",
      "product": 7,
    },
    {
      "id": 3,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "email": "leanne.graham@gmail.com",
      "phone": "215487",
      "city": "Manouba",
      "product": 10,


    },{
      "id": 4,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "email": "leanne.graham@gmail.com",
      "phone": "215487",
      "city": "Ariana",
      "product": 5,

    },
    {
      "id": 5,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "email": "leanne.graham@gmail.com",
      "phone": "215487",
      "city": "Ben Arous",
      "product": 5,

    },
    {
      "id": 6,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "email": "leanne.graham@gmail.com",
      "phone": "215487",
      "city": "Bizerte",
      "product": 5,

    },
    {
      "id": 7,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "email": "leanne.graham@gmail.com",
      "phone": "215487",
      "city": "Ariana",
      "product": 5,

    },
    {
      "id": 8,
      "firstname": "Leanne Graham",
      "lastname": "Bret",
      "email": "leanne.graham@gmail.com",
      "phone": "215487",
      "city": "Ariana",
      "product": 5,

    },
  ]

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:9000/api';

  
  getAllUsers() {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  getProfileById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}/profile`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }

  editUser(id: number, userData: any) {
    return this.http.patch(`${this.apiUrl}/users/${id}/edit`, userData);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}/delete`);
  }
  
}
