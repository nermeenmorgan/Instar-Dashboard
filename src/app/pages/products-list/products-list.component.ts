import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  selectedSort: string = 'newest';

  constructor(private _product: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._product.getProducts().subscribe(
      (data: any) => {
        this.products = data;
        console.log(this.products);
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  sortProducts() {
    // Implement sorting logic based on selectedSort
    switch (this.selectedSort) {
      case 'newest':
        this.products.sort((a, b) => b.id - a.id);
        break;
      case 'oldest':
        this.products.sort((a, b) => a.id - b.id);
        break;
      case 'name':
        this.products.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }
}
