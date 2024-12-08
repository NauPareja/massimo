import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsFetchService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    const products: Product[] = [
      { id: 1, name: 'Pantalón vaquero', description: 'Pantalón vaquero jogger para hombre', price: '49,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 2, name: 'Camisa casual', description: 'Camisa casual de algodón para hombre', price: '39,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 3, name: 'Chaqueta deportiva', description: 'Chaqueta ligera para actividades deportivas', price: '59,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 4, name: 'Sudadera con capucha', description: 'Sudadera cómoda con capucha ajustable', price: '44,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 5, name: 'Zapatillas running', description: 'Zapatillas ligeras y cómodas para correr', price: '89,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 6, name: 'Gorra clásica', description: 'Gorra ajustable para uso diario', price: '19,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 7, name: 'Mochila urbana', description: 'Mochila resistente para el día a día', price: '69,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 8, name: 'Cinturón de cuero', description: 'Cinturón elegante de cuero genuino', price: '34,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 9, name: 'Camiseta básica', description: 'Camiseta lisa de algodón para hombre', price: '14,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 10, name: 'Polo clásico', description: 'Polo con diseño clásico y elegante', price: '29,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 11, name: 'Pantalones cortos', description: 'Pantalones cortos casuales para verano', price: '24,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 12, name: 'Chaqueta acolchada', description: 'Chaqueta cálida y ligera para invierno', price: '99,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 13, name: 'Camisa formal', description: 'Camisa formal para ocasiones especiales', price: '54,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 14, name: 'Calcetines deportivos', description: 'Pack de 3 pares de calcetines', price: '9,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 15, name: 'Guantes de cuero', description: 'Guantes elegantes para invierno', price: '39,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 16, name: 'Chaleco polar', description: 'Chaleco cómodo para actividades al aire libre', price: '49,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 17, name: 'Pantalón de chándal', description: 'Pantalón cómodo para uso diario', price: '29,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 18, name: 'Camisa estampada', description: 'Camisa con estampados modernos', price: '44,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 19, name: 'Botas de montaña', description: 'Botas resistentes para actividades outdoor', price: '119,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
      { id: 20, name: 'Gafas de sol', description: 'Gafas con protección UV para el verano', price: '79,95 €', image: 'https://holygrailcss.github.io/assets/placeholder/3-4.jpg' },
    ];
    

    return of(products);
  }
}