import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:9000/api';

  getProductsBySupplier() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }
  updateProduct(id: number, productData: any)  {
    return this.http.put(`${this.apiUrl}/products/${id}`, productData);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }
}
