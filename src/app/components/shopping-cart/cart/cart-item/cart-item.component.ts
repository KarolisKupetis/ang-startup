import { Component, Input, OnInit } from '@angular/core';
import { CartManagerService } from 'src/app/services/cart-manager.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: any;

  removeItem() {
    this.cartService.removeItem(this.cartItem);
  }

  constructor(private cartService: CartManagerService) {}

  ngOnInit(): void {}
}
