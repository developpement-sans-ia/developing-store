import { Component, input } from '@angular/core';
import { Product } from '../types';


@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
  product = input.required<Product>();
}
