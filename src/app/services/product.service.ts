import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

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

  public getProducts(): any {
    return this.http.get<Product[]>('http://localhost:3000/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getProduct(id: any): any {
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

    return this.http.post<any>('http://localhost:3000/products', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public update(data: any, id: any) {
    console.log('im patching');
    console.log(data);

    return this.http
      .patch<any>(`http://localhost:3000/products/${id}`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  public deleteProduct(id: any) {
    console.log('im deleteing');
    console.log(id);

    return this.http.delete<any>(`http://localhost:3000/products/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
