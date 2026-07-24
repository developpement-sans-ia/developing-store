import { Component, input } from '@angular/core';
import { CardProductDetail } from '../../shared/card-product-detail/card-product-detail'
import { Product } from '../../shared/types';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart = [2, 2, 2];

}
