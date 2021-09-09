import { Component, OnInit } from '@angular/core';
import { CartManagerService } from 'src/app/services/cart-manager.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [{ id: 1, productId: 1, productName: 'Test', qty: 1, price: 10 }];
  cartTotal: number = 0;

  constructor(private cartManager: CartManagerService) {}

  ngOnInit(): void {
    this.cartManager
      .cartItemsState()
      .subscribe((object) => this.updateCart(object));

    this.updateTotal();
  }

  updateCart(object: any) {
    if (object.hasOwnProperty('productId')) {
      console.log('im cart item');
      this.removeItemFromCart(object.id);
    } else {
      this.addItemToCart(object);
    }

    this.updateTotal();
  }

  addItemToCart(product: any) {
    let lastId: number = 1;

    if (this.cartItems) {
      lastId = this.cartItems[this.cartItems.length - 1].id;
    }

    this.cartItems.push({
      id: lastId + 1,
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price,
    });
  }

  updateTotal() {
    this.cartTotal = 0;

    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }

  removeItemFromCart(removedId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id != removedId);
  }
}
