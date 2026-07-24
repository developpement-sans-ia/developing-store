import { Component, inject, input } from '@angular/core';
import { CardProductDetail } from '../../shared/card-product-detail/card-product-detail'
import { Product } from '../../shared/types';
import { ProductService } from '../../shared/services/product-service/product-service';


@Component({
  selector: 'app-cart',
  imports: [CardProductDetail],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  productService = inject(ProductService);
  product = this.productService.productSignal;
  cart = [2, 2, 2];

}
