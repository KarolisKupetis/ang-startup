import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductResolverService } from './product-resolver.service';

// app:4200/items

const routes: Routes = [
  {
    path: 'item/new',
    component: ProductViewComponent,
  },
  {
    path: 'item/:id',
    component: ProductViewComponent,
    resolve: { product: ProductResolverService },
  },
  {
    path: 'items',
    component: ShoppingCartComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'items',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolverService],
})
export class AppRoutingModule {}
export const routingComponents = [ProductViewComponent, ProductListComponent];
