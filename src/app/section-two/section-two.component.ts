import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductsFetchService } from '../fetchs/products.fetch.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'section[app-section-two]',
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.scss'
})
export class SectionTwoComponent {
  private _productsFetchService = inject(ProductsFetchService);
  products$: Observable<Product[]> = this._productsFetchService.getProducts()
  .pipe(
    map(products => products.slice(0, 4))
  );
}
