import { Component, inject, input, OnInit } from '@angular/core';
import { CardProductDetail } from '../../shared/card-product-detail/card-product-detail'
import { Product } from '../../shared/types';
import { ProductService } from '../../shared/services/product-service/product-service';
import { CartService } from '../../shared/services/cart-service/cart-service';


@Component({
  selector: 'app-cart',
  imports: [CardProductDetail],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  productService = inject(ProductService);
  cartService = inject(CartService);
  product = this.productService.productSignal;
  cart = this.cartService.cartSignal;
  total:number = 0;

  ngOnInit(){
    this.cartService.loadFromLocalStorage();
    if (this.cart().products != undefined) {
      this.cart().products.forEach((product)=>{this.total+= product.price})
    }
  }

  removeFromCart(article:Product){
    this.cartService.removeFromCart(article);
    this.cartService.saveToLocalStorage();
    this.total-=article.price;
  }
}
