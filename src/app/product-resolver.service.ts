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

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    const id = route.params['id'];

    return this.productService.getProduct(id);
  }
}
