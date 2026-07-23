import { Component, OnInit, inject, signal } from '@angular/core';
import { Product } from '../types';
import { ProductService } from '../services/product-service/product-service';


@Component({
  selector: 'app-card-product-detail',
  imports: [],
  templateUrl: './card-product-detail.html',
  styleUrl: './card-product-detail.css',
})
export class CardProductDetail implements OnInit {
  //productSelected = input.required<Product[]>();
  private readonly productService = inject(ProductService);
  private product = this.productService.productListSignal;
  currentProduct = signal<Product[]>([]);


  ngOnInit() {

  }



}
