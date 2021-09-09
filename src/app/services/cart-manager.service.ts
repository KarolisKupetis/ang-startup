import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartManagerService {
  constructor() {}

  itemSubject = new Subject();

  addItem(product: any) {
    console.log('Im adding');
    console.log(product);

    this.itemSubject.next(product);
  }

  removeItem(cartItem: any) {
    console.log('Im removing');
    console.log(cartItem);
    cartItem.name = 'remove';

    this.itemSubject.next(cartItem);
  }

  cartItemsState() {
    return this.itemSubject.asObservable();
  }
}
