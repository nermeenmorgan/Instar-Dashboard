import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-product-in-stock',
  templateUrl: './product-in-stock.component.html',
  styleUrls: ['./product-in-stock.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class ProductInStockComponent {
  percentage = 75;
}
