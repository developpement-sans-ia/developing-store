import { Component, OnInit, inject, input, output, signal } from '@angular/core';
import { Product } from '../types';
import { ProductService } from '../services/product-service/product-service';


@Component({
  selector: 'app-card-product-detail',
  imports: [],
  templateUrl: './card-product-detail.html',
  styleUrl: './card-product-detail.css',
})
export class CardProductDetail {
  product = input.required<Product>();
  close = output<void>();



}
