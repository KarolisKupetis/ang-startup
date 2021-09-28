import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  myProducts!: Product[];

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public getProduct(id: any): Observable<Product> {
    console.log(`Service one product`);
    console.log(`given id ${id}`);

    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  public getProductMocked(id: any): any {
    console.log(`Service one product`);
    console.log(`given id ${id}`);

    return this.products[id];
  }

  public createProduct(data: any) {
    console.log('im creating');
    console.log(data);

    return this.http.post('http://localhost:3000/products', data);
  }

  public update(data: any, id: any) {
    console.log('im patching');
    console.log(data);

    return this.http.patch(`http://localhost:3000/products/${id}`, data);
  }

  public deleteProduct(id: any) {
    console.log('im deleteing');
    console.log(id);

    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
