import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartManagerService } from 'src/app/services/cart-manager.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: Product;

  constructor(private cartService: CartManagerService) {}

  addItemToCart() {
    this.cartService.addItem(this.productItem);
  }

  ngOnInit(): void {}
}
