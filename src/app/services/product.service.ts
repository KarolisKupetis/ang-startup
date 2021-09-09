import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Chocolate cookie 1', 'Even better cookie', 110),
    new Product(2, 'Chocolate cookie 2', 'Even better cookie', 120),
    new Product(3, 'Chocolate cookie 3', 'Even better cookie', 130),
    new Product(4, 'Chocolate cookie 4', 'Even better cookie', 140),
    new Product(5, 'Chocolate cookie 5', 'Even better cookie', 150),
    new Product(6, 'Chocolate cookie 6', 'Even better cookie', 250),
    new Product(7, 'Chocolate cookie 7', 'Even better cookie', 50),
  ];

  constructor() {}

  public getProducts(): Product[] {
    return this.products;
  }
}
