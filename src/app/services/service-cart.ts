import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.isCartOpenSubject.asObservable();


  addToCart(item: CartItem) {
    this.cartItems.push(item);
  }

  removeFromCart(item: CartItem) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  toggleCart() {
    const isOpen = this.isCartOpenSubject.value;
    this.isCartOpenSubject.next(!isOpen);
  }
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
