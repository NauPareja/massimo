import { Component, Input, input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'article[app-product-card]',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();
}
