import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }
}
