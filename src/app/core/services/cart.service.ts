import { Injectable } from '@angular/core';

import { IProductCart } from './../../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProductCart[] = [];

  constructor() { }

  infoCart() {
    this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.items;
  }

  addToCart(product: IProductCart) {
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  removeCartProduct(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  cleanCart() {
    this.items = [];
    localStorage.clear();
  }
}
