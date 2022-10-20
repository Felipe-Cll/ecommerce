import { Component, OnInit } from '@angular/core';

import { IProductCart } from './../../products';
import { CartService } from './../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsCart: IProductCart[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemsCart = this.cartService.infoCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.itemsCart.reduce((prev, curr) => (prev + curr.price * curr.amount), 0)
  }

  removeCartProduct(productId: number) {
    this.itemsCart = this.itemsCart.filter(item => item.id !== productId);
    this.cartService.removeCartProduct(productId);
    this.calculateTotal();
  }

  buy() {
    alert("Parabéns, você finalizou sua compra.");
    this.cartService.cleanCart();
    this.router.navigate(["products"]);
  }
}
