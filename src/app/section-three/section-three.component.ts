import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductsFetchService } from '../fetchs/products.fetch.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'section[app-section-three]',
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.scss'
})
export class SectionThreeComponent {
  private _productsFetchService = inject(ProductsFetchService);
  products$: Observable<Product[]> = this._productsFetchService.getProducts();
}
