import { Component, input } from '@angular/core';
import { CardProductDetail } from '../card-product-detail/card-product-detail';
import { Product } from '../types';


@Component({
  selector: 'app-card-product',
  imports: [CardProductDetail],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
  product = input.required<Product>();
}
