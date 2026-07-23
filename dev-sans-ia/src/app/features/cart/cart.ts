import { Component } from '@angular/core';
import { CardProductDetail } from '../../shared/card-product-detail/card-product-detail';

@Component({
  selector: 'app-cart',
  imports: [CardProductDetail],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart = [2,2,2];
}
