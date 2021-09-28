import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartManagerService } from 'src/app/services/cart-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: Product;

  constructor(
    private cartService: CartManagerService,
    private router: Router
  ) {}

  addItemToCart() {
    this.cartService.addItem(this.productItem);
  }

  getNavigation() {
    console.log('im out');
  }

  goToDetailedView() {
    console.log(`clicked route ${this.productItem.id}`);
    this.router.navigate(['/item', this.productItem.id]);
  }

  ngOnInit(): void {}
}
