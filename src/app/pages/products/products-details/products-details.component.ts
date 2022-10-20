import { Component, OnInit } from '@angular/core';

import { IProduct, IProductCart } from './../../../products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../../core/services/products.service';
import { NotificationService } from './../../../core/services/notification.service';
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  products: IProduct[] | undefined;
  product: IProduct | undefined;
  amount = 1;

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"))
    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    this.notificationService.notify("O produto foi adicionado ao carrinho");
    const product: IProductCart = {
      ...this.product!,
      amount: this.amount,
    }
    this.cartService.addToCart(product);
  }
}
