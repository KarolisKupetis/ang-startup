import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<Product> {
  constructor(private productService: ProductService) {}
  product!: Product;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product {
    const id = route.params['id'];
    if (this.product === undefined) {
      //this.loadProduct(id);
      this.loadMockedProduct(id);
    }

    return this.product;
  }

  loadProduct(id: any) {
    this.productService.getProduct(id).subscribe((product: Product) => {
      this.product = product;
      console.log(product);
    });
  }

  loadMockedProduct(id: any) {
    this.product = this.productService.getProductMocked(id);
  }
}
