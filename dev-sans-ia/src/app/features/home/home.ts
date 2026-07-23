import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardProduct } from '../../shared/card-product/card-product';
import { ProductService } from '../../shared/services/product-service/product-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CardProduct],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly productList = this.productService.productListSignal;
  readonly latestProducts = computed(() => this.productList().slice(0, 3));

  ngOnInit() {
    this.productService.getProductList().subscribe();
  }
}
